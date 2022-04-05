import React, {useEffect, useState} from "react";
import './loans.css';
import {useAuth0} from "@auth0/auth0-react";
import {toyDetails} from "../../types";
import Toy from "../Toys/Toy";

interface Props {
    id : any
}

const Loans = ({id}:Props) => {
    const { isLoading } = useAuth0();
    const [lendToys, setLendToys] = useState<Array<toyDetails>>();

    const GetLendToys = async () =>{
        console.log('fetch reached');
        console.log(id.id);
        const response = await fetch('https://localhost:7275/api/toys/myloans/' + id.id,{
            method:'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        console.log(data);
        await setLendToys(data);
        console.log(lendToys);
    }

    useEffect(()=>{
        GetLendToys();
    },[id]);

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div className="listings--container">
            <h1>My Loans</h1>
            <div>
                <Toy toys={lendToys}/>

            </div>
        </div>
    );
};

export default Loans;