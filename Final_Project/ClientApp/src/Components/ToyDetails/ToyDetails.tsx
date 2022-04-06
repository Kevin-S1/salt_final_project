import React, {useState, useEffect, useRef} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {InitialUserDetails, rating, toyDetails} from "../../types";
import "./toyDetails.css";
import {Link, useParams} from "react-router-dom";
import { GoLocation } from 'react-icons/go';
import {Row, Col, Button} from "react-bootstrap";
import {MdEmail} from "react-icons/md";
import DeleteModal from "../DeleteModal/DeleteModal";
import {useNavigate} from "react-router-dom";

const ToyDetails = ({ initialUserDetails }: any ) => {
    const params = useParams();
    const { loginWithRedirect, logout 
        ,isAuthenticated, isLoading} = useAuth0();
    
    const [Toy, setToy] = useState<toyDetails>();
    const [show, setShow] = useState(false);
    const [toyOwner, setToyOwner] = useState<InitialUserDetails>();
    const [ratings, setRatings] = useState<Array<rating>>();
    const [averageRating, setAverageRating] = useState<number>();
    const [newRating, setNewRating] = useState<number>(1);
    const [ratingDTO, setRatingDTO] = useState<rating>();
    let firstLoad = useRef(true);


    const showHandler = () => {
        setShow(!show);
    }

    const navigate = useNavigate()
    
    const reservationHandler = async (e: any) => {
        let updatedToy: any = Toy; 
        updatedToy.lendeeId = initialUserDetails.id;
        updatedToy.status = 1   ; 
        
        setToy(updatedToy); 
        
        console.log(updatedToy);
        console.log(Toy);
        
        const response = await fetch('https://localhost:7275/api/toys/' + params.id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Toy)
        })
        navigate('/toys');
    };    
    
    
    const GetToyOwner = async () => {
        const response = await fetch('https://localhost:7275/api/users/' + Toy?.userId,{
            method:'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        setToyOwner(data);
    }
    
    const UpdateUserRating = async () => {
        console.log(newRating);
        
        const response = await fetch('https://localhost:7275/api/users/' + Toy?.userId,{
            method:'PATCH',
            body: JSON.stringify(ratingDTO),
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        console.log(response);
        
        var data = response.json();
        
        console.log(data);
        
    }
    
    const GetToysData = async () =>{
        const response = await fetch('https://localhost:7275/api/toys/getbyid/' + params.id,{
            method:'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        setToy(data);
    }
    
    useEffect(() => {
        GetToysData();
        
    }, [])
    
    useEffect(() => {
            GetToyOwner()
    },[Toy])
    useEffect(() => {
        setRatings(toyOwner?.ratings);
    },[toyOwner])
    
    useEffect(() => {
        let arr = ratings?.map(r => r.value);
        let avgRating = 0;
        if(arr !== undefined)
        {
            avgRating = arr.reduce((a: any,b: any)=>a+b, 0) / arr.length;
        }
        
        setAverageRating(avgRating)
        
    }, [ratings])
    
    
    
    useEffect(() => {
        const newRatingDTO: rating = {value: newRating, userId: parseInt(toyOwner.id)}
        setRatingDTO(newRatingDTO)
    }, [newRating])
    
    
    
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return(
        <div className="toy-details__body">
            <Row className="toy-details__back-button_row" >
                <button className="toy-details__back-button btn-primary btn" onClick={() => navigate('/toys')}>Back to Toys</button>
            </Row>
            <Row className="toy-details__top">
                <Col className="col-6" >
                    <img className="toy-details__image" src={Toy?.image} />
                </Col>
                <Col className="toy-details__text col-6">
                    <p className="toy-details__header">{Toy?.name}</p>
                    <p>{Toy?.userCity} <GoLocation className="toy-details__go-location"/></p>
                    <div className="toy-details__status">
                        <p className={
                            Toy?.status === 0 ? ' toy--details--status--text status__available' :
                                (Toy?.status === 1 ? 'toy--details--status--text status__reserved' :
                                    'toy--details--status--text status__unavailable')
                        }>{
                            Toy?.status === 0 ? 'Available' : (Toy?.status === 1 ? 'Reserved' : 'Not Available')
                        }</p>   
                        <div className={
                            Toy?.status === 0 ? 'toy-details__status-blob blob__available' :
                                (Toy?.status === 1 ? 'toy-details__status-blob blob__reserved' :
                                    'toy-details__status-blob blob__unavailable')
                        }></div>
                    </div>
                    
                    <Button className={Toy?.userId === initialUserDetails?.id.toString() ?
                        'btn-hidden' : (Toy?.status === 1 ? 'btn-reserved' : (Toy?.status === 2 ? 'btn-unavailable' : 'btn-success')  )} onClick={e => {  reservationHandler(e) }}>Reserve</Button>
                    {/* Owner buttons */}
                    {Toy?.userId == initialUserDetails?.id.toString() ?
                        <article className='toy--owner--button--container'>
                            <Link className='toy--owner--button toy--owner--button__edit' to={`/edittoy/${Toy?.id}`}>Edit</Link>
                            <Link to={'/toys'}><button onClick={showHandler} className='toy--owner--button toy--owner--button__delete' >Delete</button> </Link>
                            {show ?
                                <DeleteModal show={show} id={Toy?.id}/> : <></>}
                        </article> : <></>
                    }
                </Col>
            </Row>
            <div className="toy-details__bottom">
                <h6>About this toy: </h6>
                <p className="toy-details__bottom-text">{Toy?.description}</p>
                <div className="toy-details__info">
                    {isAuthenticated ?
                        <div className="toy-details--info__user-info">
                            <h3>Contact information:</h3>
                            <div>{Toy?.userName && averageRating}</div>
                            <div><MdEmail/> {Toy?.userEmail} </div>
                            <div>{Toy?.phoneNumber}</div>
                            <select className='dropdown-filter' onChange={e => setNewRating(parseInt(e.target.value))} >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                            <button  className="btn-primary" onClick={() => UpdateUserRating()}>Add rating</button>
                        </div>
                        :
                        <div >
                            <p>login to contact owner</p>
                            <button className="btn-primary" onClick={() => loginWithRedirect()}>Login </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}


export default ToyDetails;