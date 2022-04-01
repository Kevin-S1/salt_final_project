import React from "react";
import './toy.css'
import {toyDetails} from "../../types";
import ToyInfo from "../ToyInfo/ToyInfo";
import { Dropdown } from "react-bootstrap";

interface Props{
   toys : Array<toyDetails> | undefined
}
const Toy = ({toys}: Props) => {
    console.log(toys);
    return (
        <>
            <section className='toy__search__filter'>
                <form>
                    <label className="toy__search__label">Search</label>
                    <input className="toy__search__input" type='text' value='search for toy'></input>
                </form>
                <article className="toy__filter__container">
                    <Dropdown className="d-inline mx-2">
                        <Dropdown.Toggle className="toy__filter__button" id="dropdown-autoclose-true">
                        Categories
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href="#">Lego</Dropdown.Item>
                        <Dropdown.Item href="#">Toy Cars</Dropdown.Item>
                        <Dropdown.Item href="#">Dolls</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="d-inline mx-2">
                        <Dropdown.Toggle className="toy__filter__button"  id="dropdown-autoclose-true">
                        Age
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href="#">0-1</Dropdown.Item>
                        <Dropdown.Item href="#">2-4</Dropdown.Item>
                        <Dropdown.Item href="#">5-6</Dropdown.Item>
                        <Dropdown.Item href="#">7-10</Dropdown.Item>
                        <Dropdown.Item href="#">10+</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </article>
                
            </section>
            <section className="toy__list">
                {
                    toys?.map((t : toyDetails,index) =>(<ToyInfo key={index} toy={t} />))
                }

            </section>
        </>
        
    )
};

export default Toy;