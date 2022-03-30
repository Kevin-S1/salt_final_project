import React from "react";
import './toy.css'
import {toy} from "../../types";

const Toy = (props : any) => {

    return (
        <>
            {/*{*/}
            {/*    props.toys.map((toy:any) =>*/}
            {/*        <h1>{toy.description}</h1>*/}
            {/*    )*/}
            {/*}*/}
            {
                props.toys.map((t:any) => t.description)
            }

        </>
    )
};

export default Toy;