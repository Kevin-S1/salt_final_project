import React from "react";
import './toy.css'
import {toyDetails} from "../../types";
import ToyInfo from "../ToyInfo/ToyInfo";

interface Props{
   toys : Array<toyDetails> | undefined
}
const Toy = ({toys}: Props) => {
    console.log(toys);
    return (
        <>
            {
                toys?.map((t : toyDetails,index) =>(<ToyInfo key={index} toy={t} />))
            }

        </>
    )
};

export default Toy;