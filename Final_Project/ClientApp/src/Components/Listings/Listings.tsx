import React, {useEffect, useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './listings.css'
import {useNavigate} from "react-router-dom";
import {toyDetails} from "../../types";
import {InitialUserDetails} from "../../types";
import Toy from "../Toys/Toy";

interface Props {
    initialUserDetails : any
}

const Listings = ({initialUserDetails}:Props) => {
    console.log(initialUserDetails);
    const navigate = useNavigate();
    const { isAuthenticated, user, isLoading } = useAuth0();
    const [userToys, setUserToys] = useState<Array<toyDetails>>();

    const GetToys = async () =>{
        console.log('fetch reached');
        const response = await fetch('https://localhost:7275/api/users/usertoys/' + initialUserDetails.id,{
            method:'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        console.log(data);
        await setUserToys(data);
        console.log(userToys);
    }

    useEffect(()=>{
        GetToys();
    },[initialUserDetails]);
    
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    
    return (
        <div className="listings--container">
            <h4 className="listings--header">My Listings:</h4>
            <button className="button-3" onClick={ () => navigate('/add')}>Add Toy</button>
            <div>
                <Toy initialUserDetails={initialUserDetails} toys={userToys}/>
                
            </div>
        </div>
    );
};

export default Listings;