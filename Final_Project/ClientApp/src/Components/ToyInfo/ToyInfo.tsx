import React from 'react';
import { toy } from '../../types';
import {Link} from "react-router-dom";
import './toyinfo.css';

interface Props{
    toy: toy
}
const ToyInfo = ({toy}: Props) => {
    
    return (
        <>
            <h1>{toy.name}</h1>
            <p>{toy.description}</p>
            <Link to={`/toys/${toy.userId}`} >Details</Link>
        </>
    )
};

export default ToyInfo;