import  React, {useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Form,Button} from "react-bootstrap";
import {toyDetails} from "../../types";
import "./toyDetails.css";


const ToyDetails = (props: toyDetails) => {
    const { loginWithRedirect, logout 
        ,isAuthenticated, isLoading} = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    
    return(
        <div className="toy-details--body">
            <img className="toy-details__image" src={props.imgUrl} />
            <div className="toy-details__info">
                <header className="toy-details__header">{props.name}</header>
                <p className="toy-details__description">{props.description}</p>
                
                {isAuthenticated ?
                    <footer className="toy-details--info__user-info">
                        <div>{props.userName}</div>
                        <div>{props.userEmail}</div>
                        <div>{props.phoneNumber}</div>
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