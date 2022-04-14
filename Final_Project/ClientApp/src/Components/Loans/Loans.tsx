import React, {useEffect, useState} from "react";
import './loans.css';
import {useAuth0} from "@auth0/auth0-react";
import {toyDetails} from "../../types";
import Toy from "../Toys/Toy";
import Loading from "../Loading/Loading";

interface Props {
    initialUserDetails : any
}

const Loans = ({initialUserDetails}:Props) => {
    const { isLoading } = useAuth0();
    const [lendToys, setLendToys] = useState<Array<toyDetails>>();

    const GetLendToys = async () =>{
        const response = await fetch('https://localhost:7275/api/toys/myloans/' + initialUserDetails.id,{
            method:'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        setLendToys(data);
    }

    useEffect(()=>{
        GetLendToys();
    },[initialUserDetails]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="listings--container">
            <h1>My Loans</h1>
            <div>
                <Toy getToys={false} initialUserDetails={initialUserDetails} toys={lendToys}/>
            </div>
        </div>
    );
};

export default Loans;