import React from 'react';
import { toyDetails } from '../../types';
import {Link} from "react-router-dom";
import './toyinfo.css';

interface Props{
    toy: toyDetails
}
const ToyInfo = ({toy}: Props) => {
    
    return (
        <>
            <h1>{toy.name}</h1>
            <p>{toy.description}</p>
            <Link to={`/toys/${toy.id}`} >Details</Link>
        </>
    )
};

export default ToyInfo;