import React from "react";
import logo1 from "../../HomePagePic1.svg";

const AboutPage = () => {
    return(
        <div className="about-page__container" >
            <div className="about-page__top">
                <h2>About Us</h2>   
            </div>
            <div className="about-page__middle" >
                <div className="about-page__header">Welcome to <strong className="nav-header__sub">Borrow</strong>My!</div>
                <p className="about-page__paragraph"> The platform where you can borrow toys from your neighbours, and lend out toys that your kids play with only sometimes.
                    Do your kids love new toys, but you don’t love the ever-growing mountain of vehicles, dolls and games spilling out of your cupboards?
                    We have created a platform were you can connect with like-minded parents to lend toys to each other, creating a large toy library for your children.
                </p>
                <h4>Benefits of using BorrowMy:</h4>
                <ul>
                    <li>Reduce consumption, especially of plastics, which is better for the environment.</li>
                    <li>Save money and have less clutter in your home.</li>
                    <li>Kids get to play with new and exciting toys often.</li>
                </ul>
            </div>
            <div className="about-page__bottom" >
                
            </div>
        </div>
        
    );
};

export default AboutPage;