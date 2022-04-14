import React, {useEffect, useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './listings.css'
import {useNavigate} from "react-router-dom";
import {toyDetails} from "../../types";
import {InitialUserDetails} from "../../types";
import Toy from "../Toys/Toy";
import Loading from "../Loading/Loading";

interface Props {
    initialUserDetails : any
}

const Listings = ({initialUserDetails}:Props) => {
    const { isLoading } = useAuth0();
    const [userToys, setUserToys] = useState<Array<toyDetails>>();

    const GetToys = async () =>{
        const response = await fetch('https://localhost:7275/api/users/usertoys/' + initialUserDetails.id,{
            method:'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        setUserToys(data);
    }

    useEffect(()=>{
        GetToys();
    },[initialUserDetails]);
    
    if (isLoading) {
        return <Loading />;
    }
    
    return (
        <div className="listings--container">
            <h4 className="listings--header">My Listings:</h4>
            <div>
                <Toy getToys={false} initialUserDetails={initialUserDetails} toys={userToys}/>
            </div>
        </div>
    );
};

export default Listings;