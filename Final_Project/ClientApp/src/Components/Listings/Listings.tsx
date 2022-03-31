import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './listings.css'
import {useNavigate} from "react-router-dom";
import {toy} from "../../types";
import {InitialUserDetails} from "../../types";


const Listings = (props: toy) => {
    const navigate = useNavigate();
    const [toys, setToyList] = useState<toy>();
    
    // const toyListings = async() => {
    //     setToyList(toys)
    //    
    // }
    setToyList(toys)
    return (
        <>
            <div>
                <h4>Listings:</h4>
                <button onClick={ () => navigate('/add')}>Add Toy</button>
                
                <div>
                    
                    <ul>
                        {props.map((t : toy) =>{
                            <li>
                                {t.name}
                            </li>
                        })}
                    </ul>
                </div>
            </div>

        </>
    );
};

export default Listings;