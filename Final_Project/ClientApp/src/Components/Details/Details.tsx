import React, {useState, useEffect, useRef} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Form,Button} from "react-bootstrap";
import {userDetails} from "../../types";
import './details.css';
import {First} from "react-bootstrap/PageItem";
import SuccessMsg from "../SuccessMsg/SuccessMsg";
import Footer from "../Footer/Footer";
import profile from '../../profile.svg'
import profilepic1 from '../../profilepic1.png'

const Details = ({initialUserDetails}:any) => {
  
    const { user, isAuthenticated, isLoading } = useAuth0();
    
    const [updatedUserDetails, setUpdatedUserDetails] = useState<userDetails>({city: "", country: "", phoneNumber: ""});
    const [userCity, setUserCity] = useState<string>("")
    const [userCountry, setUserCountry] = useState<string>("")
    const [userPhoneNumber, setUserPhoneNumber] = useState<string>("")
    const [successStatus, setSuccessStatus] = useState<boolean>(false);
    
    let firstLoad = useRef(true);
    
    const submitHandler = (e : any) =>{
       e.preventDefault();
       setUpdatedUserDetails({city:userCity,country:userCountry,phoneNumber:userPhoneNumber});
    }
    
    const getUserInformation = async () =>{
        
        if(isAuthenticated)
        {
            const response = await fetch(`https://localhost:7275/api/Users/${initialUserDetails.id}`,{
                method:'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json();
            console.log(data);
            setUserCity(data.city);
            setUserCountry(data.country);
            setUserPhoneNumber(data.phoneNumber);
        }
        
    }
    useEffect(()=>{
        getUserInformation();
    },[initialUserDetails])
    
    const UpdateUserInformation = async ()=> {
       if(isAuthenticated)
       {
           const response = await fetch(`https://localhost:7275/api/Users/${user?.sub}`,{
               method:'PUT',
               body:JSON.stringify(updatedUserDetails),
               headers: {
                   "Content-Type": "application/json"
               }
           })
           if(response.status === 204) {
               setSuccessStatus(true);
           }
           setTimeout(() => { setSuccessStatus(false)}, 4000);
           
       }
    }
    
    useEffect(() =>{
        if(!firstLoad.current) {
          UpdateUserInformation();
        }
        firstLoad.current = false;
    },[updatedUserDetails])
    

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    
    return (
        <>
        <div className="details">
            <div className="details-container-left">
                <img className="details-container-image" src={profilepic1} />
            </div>
            <div className="details-container-right">
                <div className="details-inner-container">
                    <img className="details-inner-container-image" src={user?.picture} alt={user?.name} />
                </div>
                
                <div className="details-inner-container-username">
                    <h5>UserName : {initialUserDetails.userName} </h5>
                </div>
                <div className="details-inner-container-email">
                    <h4>Email :</h4>
                    <p>{initialUserDetails.email}</p>
                </div>
                
                
                { successStatus ? <SuccessMsg message="Your profile has been updated :)"/> : <></> }
                
                <Form onSubmit={ (e) => submitHandler(e)}>
                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label className='detail-input-label'>City</Form.Label>
                        <Form.Control className='detail-input-field' type="text" placeholder="Enter City" name="city"  value={userCity} onChange={e => setUserCity(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCountry">
                        <Form.Label className='detail-input-label'>Country</Form.Label>
                        <Form.Control  className='detail-input-field' type="text" placeholder="Enter Country" name="country"  value={userCountry} onChange={e => setUserCountry(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label className='detail-input-label'>Phone number</Form.Label>
                        <Form.Control className='detail-input-field' type="text" placeholder="Enter phone number" name="phoneNumber" value={userPhoneNumber} onChange={e => setUserPhoneNumber(e.target.value)}/>
                    </Form.Group>
                    <Button className="detail-page-submit" type="submit">
                        Save my Details
                    </Button>
                </Form>
            </div>
        </div>
      <Footer />
    </>
    );
};

export default Details;