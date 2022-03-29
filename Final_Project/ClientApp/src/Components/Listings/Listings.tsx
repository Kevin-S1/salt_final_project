import React from "react";
import './listings.css'
import {useNavigate} from "react-router-dom";


const Listings = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <h4>Listings:</h4>
                <button onClick={ () => navigate('/add')}>Add Toy</button>
            </div>

        </>
    );
};

export default Listings;