import React from "react";
import './toy.css'
import {toy} from "../../types";
import ToyInfo from "../ToyInfo/ToyInfo";

interface Props{
   toys : Array<toy> | undefined
}
const Toy = ({toys}: Props) => {
    console.log(toys);
    return (
        <>
            {
                toys?.map((t : toy,index) =>(<ToyInfo key={index} toy={t} />))
            }

        </>
    )
};

export default Toy;