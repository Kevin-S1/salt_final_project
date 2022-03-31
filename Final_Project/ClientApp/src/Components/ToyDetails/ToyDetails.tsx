import  React, {useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Form,Button} from "react-bootstrap";
import {toyDetails} from "../../types";
import "./toyDetails.css";
import {useParams} from "react-router-dom";


const ToyDetails = () => {
    const params = useParams();
    console.log(params);
    const { loginWithRedirect, logout 
        ,isAuthenticated, isLoading} = useAuth0();
    
    const [Toy, setToy] = useState<toyDetails>();

    

    const GetToysData =async () =>{
        const response = await fetch('https://localhost:7275/api/toys/' + params.id,{
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
    
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    
    return(
        <div className="toy-details--body">
            <img className="toy-details__image" src={Toy?.image} />
            <div className="toy-details__info">
                <header className="toy-details__header">{Toy?.name}</header>
                <p className="toy-details__description">{Toy?.description}</p>

                {isAuthenticated ?
                    <footer className="toy-details--info__user-info">
                        <div>{Toy?.userName}</div>
                        <div>{Toy?.userEmail}</div>
                        <div>{Toy?.phoneNumber}</div>
                    </footer>
                         :
                    <footer >
                        <p>login to contact owner</p>
                        <button className="" onClick={() => loginWithRedirect()}>Login </button>
                    </footer>
                }
            </div>
        </div>

    )
}


export default ToyDetails;