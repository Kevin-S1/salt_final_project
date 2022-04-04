import React from 'react';
import { toyDetails } from '../../types';
import {Link} from "react-router-dom";
import './toyinfo.css';
import { GoLocation } from 'react-icons/go';
import { IoIosCheckmarkCircle } from 'react-icons/io';

interface Props{
    toy: toyDetails
}
const ToyInfo = ({toy}: Props) => {
    
    return (
        <Link to={`/toys/${toy.id}`} >
            <article className='toy__card'>
                <article className='row row__first'>
                    <article className='col-7 toy__card__col__first'>
                        <h3 className='toy__card__text toy__card__text--header'>{toy.name}</h3>
                        <p className='toy__card__text toy__card__text--description'>{toy.description}</p>
                        <article className='toy__card__info__row'>
                            <h4 className='toy__card__text toy__card__text--location'>
                            <GoLocation className='logo'/>{toy.user.city}</h4>
                            <h4 className='toy__card__text toy__card__text--status'>
                            <IoIosCheckmarkCircle />{toy.status}</h4>
                        </article>
                        
                    </article>
                    <article className='col-5'>
                        <img className='toy__card__image' src={toy.image}/>
                    </article>
                </article>
        
            </article>  

        </Link>
    )
};

export default ToyInfo;