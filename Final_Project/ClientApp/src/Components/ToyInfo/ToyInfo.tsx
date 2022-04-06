import React, {useCallback, useEffect, useState} from 'react';
import { toyDetails } from '../../types';
import {Link, useNavigate} from "react-router-dom";
import './toyinfo.css';
import { GoLocation } from 'react-icons/go';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import DeleteModal from "../DeleteModal/DeleteModal";

interface Props{
    
    toy: toyDetails,
    initialUserDetails: any
}
const ToyInfo = ({toy, initialUserDetails}: Props) => {
        const [show, setShow] = useState(false)
        const [category, setCategory] = useState('');
        
        const showHandler = () => {
            setShow(!show);
        }
        
    
    
    useEffect(() => {
        switch (toy?.category){
            case 0 : break;
            case 1 : setCategory('Lego'); break;
            case 2 : setCategory('Puzzle'); break;
            case 3 : setCategory('Dolls'); break;
            case 4 : setCategory('Vehicles'); break;
            case 5 : setCategory('Battery-Operated'); break;
            case 6 : setCategory('Wooden Toys'); break;
            case 7 : setCategory('Board Game'); break;
        }
    }, [toy])
        
        return (
            <article>
                <Link to={`/toys/${toy.id}`} >
                    <article className={toy.userId == initialUserDetails.id ? 'toy__card toy__card__owner' : 'toy__card'}>
                        <article className='row row__first'>
                            <article className='col-7 toy__card__col__first'>
                                <h3 className='toy__card__text toy__card__text--header'>{toy.name}</h3>
                                <h3 className='toy__card__text toy__card__text--header__sub'>{category}</h3>
                                <p className='toy__card__text toy__card__text--description'>{toy.description}</p>
                                {toy.userId == initialUserDetails.id.toString() ?
                                    <article className='toy--owner--button--container'>
                                        <Link className='toy--owner--button toy--owner--button__edit' to={`/edittoy/${toy.id}`}>Edit</Link>
                                        <Link to={''}><button onClick={showHandler} className='toy--owner--button toy--owner--button__delete' >Delete</button> </Link>
                                        {show ?
                                            <DeleteModal show={show} id={toy.id}/> : <></>}
                                    </article> :
                                    <div className='filler'></div>
                                }
                                <article className='toy__card__info__row'>
                                    <h4 className='toy__card__text toy__card__text--location'>
                                        <GoLocation className='logo'/>{toy.userCity === undefined ? toy.user.city : toy.userCity} </h4>
                                    <h4 className={toy?.status === 0 ? 'toy__card__text--description toy--card--status toy--status__available' :
                                        (toy?.status === 1 ? 'toy__card__text--description toy--card--status toy--status__reserved' :
                                            'toy__card__text--description toy--card--status toy--status__unavailable')}>
                                        <IoIosCheckmarkCircle  />{
                                        toy?.status === 0 ? 'Available' : (toy?.status === 1 ? 'Reserved' : 'Not Available')
                                    }</h4>
                                </article>
                            </article>
                            <article className='col-5'>
                                <img className='toy__card__image' src={toy.image}/>
                            </article>
                        </article>
                    </article>
                </Link>
                
            </article>
        
    )
};

export default ToyInfo;