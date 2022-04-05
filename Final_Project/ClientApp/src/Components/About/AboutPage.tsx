import React from "react";
import './aboutpage.css';

const AboutPage = () => {
    return(
        <div className="about-page__container" >
            <div className="about-page__top">
                <h4>Members of BorrowMy</h4>   
            </div>
            <div className="about-page__middle" >
                <div className="about-page__profile">
                    <img className="about-page__image" src="https://media.istockphoto.com/photos/side-view-longbeard-business-man-portrait-picture-id1074638206" />
                    <p><strong>Kevin</strong>, CEO BorrowMY</p>
                </div>
                <div className="about-page__profile">
                    <img className="about-page__image" src="https://media.istockphoto.com/photos/side-view-longbeard-business-man-portrait-picture-id1074638206" />
                    <p><strong>Bonnie</strong>, Head Of Marketing</p>
                </div>
                <div className="about-page__profile">
                    <img className="about-page__image" src="https://media.istockphoto.com/photos/side-view-longbeard-business-man-portrait-picture-id1074638206" />
                    <p><strong>Samuel Lebender</strong>, Software Developer</p>
                </div>
                <div className="about-page__profile">
                    <img className="about-page__image" src="https://media.istockphoto.com/photos/side-view-longbeard-business-man-portrait-picture-id1074638206" />
                    <p><strong>Krishna Mohan Paruchuri</strong>, Finacial Advisor</p>
                </div>
            </div>
            <div className="about-page__bottom" >
                
            </div>
        </div>
        
    );
};

export default AboutPage;