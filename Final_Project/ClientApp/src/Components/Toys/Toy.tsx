import React, {useEffect, useRef, useState} from "react";
import './toy.css'
import {toyDetails} from "../../types";
import ToyInfo from "../ToyInfo/ToyInfo";
import {Dropdown, Form} from "react-bootstrap";
import {Link, To, useNavigate, useParams} from "react-router-dom";
import Loading from "../Loading/Loading";

interface Props{
    getToys: boolean,
    toys? : toyDetails[] | undefined;
    initialUserDetails : any
}

const Toy = ({toys, initialUserDetails, getToys}: Props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState<number>(0);
    const [age, setAge] = useState<number>(0)
    const [toyArray, setToyArray] = useState<toyDetails[]>()
    const [loading, setLoading] = useState<boolean>(false);
    const [showOwnToys, setShowOwnToys] = useState<boolean>(true);
    
    const getAllToys = async () =>{
        const response = await fetch('https://localhost:7275/api/toys',{
            method:'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        setToyArray(data);
    }
    
    const navigate = useNavigate();
    
    const categoryChangeHandler = (e: any) => {
        e.preventDefault();
        if(e.target.value === 0) return;
        setCategory(parseInt(e.target.value));
    }

    const ageChangeHandler = (e: any) => {
        e.preventDefault();
        setAge(parseInt(e.target.value));
    }
    
    const changeHandler = (e: any) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }
    
    // Workaround for bug on reload
    useEffect(() => {
        setLoading(true);
        setTimeout(()=> {
            if(getToys){
                getAllToys();
                setLoading(false);
            } else {
                setToyArray(toys);
                setLoading(false);
            }
        }, 2000)
    }, [toys])

    return (
        
            <div className="toy__page__background">
                <div className="toy__page__background__dim">
                    <section className='toy__search__filter'>
                        <form className='toy__search__form'  role="search">
                            <input className="toy__search__form__input" onChange={e => changeHandler(e)} id="search" type="search" placeholder="Search..." />
                        </form>
                        <article className="toy__filter__container">
                            <Form.Group className='filter-item'>
                                <Form.Label className='dropdown-filter-label'>Category</Form.Label>
                                <select className='dropdown-filter' onChange={e => categoryChangeHandler(e)}>
                                    <option selected value="0">All</option>
                                    <option value="1">Lego</option>
                                    <option value="2">Puzzle</option>
                                    <option value="3">Dolls</option>
                                    <option value="4">Vehicles</option>
                                    <option value="5">Battery Operated</option>
                                    <option value="6">Wooden Toys</option>
                                    <option value="7">Board Games</option>
                                </select>
                            </Form.Group>
                            <Form.Group className='filter-item'>
                                <Form.Label className='dropdown-filter-label'>Age Category</Form.Label>
                                <select className='dropdown-filter' onChange={e => ageChangeHandler(e)} >
                                    <option selected value="0">All</option>
                                    <option value="1">0-1</option>
                                    <option value="2">2-4</option>
                                    <option value="3">5-6</option>
                                    <option value="4">7-10</option>
                                    <option value="5">10+</option>
                                </select>
                            </Form.Group>
                            
                            <div className='filter-item'>
                                <label className='dropdown-filter-label' htmlFor='own-toys-checkbox'>Show own toys?</label>
                                <input className='checkbox-filter' id='own-toys-checkbox' type='checkbox' defaultChecked={showOwnToys} onChange={() => setShowOwnToys(!showOwnToys)}/>
                            </div>
                            <div className='add-button-container'>
                                <Link to='/add'><button className='button-4 button-5 button-bold-text'>Lend out a toy</button></Link>
                            </div>
                        </article>
                        
                    </section>
                    <section className="toy__list"> 
                        {loading ? <Loading /> : <></>}
                        {
                            toyArray?.filter(toy => toy.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                .filter(toy => showOwnToys ? toy : toy.userId !== initialUserDetails?.id)
                            .filter(toy => category === 0 ? toy : toy.category === category)
                            .filter(toy => age === 0 ? toy : toy.age === age)
                            .map((t : toyDetails,index) =>(<ToyInfo initialUserDetails={initialUserDetails} key={index} toy={t} />))
                        }
                    </section>
                </div>
            </div>
    )
};

export default Toy;