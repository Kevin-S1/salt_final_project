import React from "react";
import './aboutpage.css';
import krishna from '../../krishna.png'
import bonnie from '../../Bonnie.png'
import kevin from '../../kevin.png'
import samuel from '../../Samuel.png'
import Footer from "../Footer/Footer";

const AboutPage = () => {
    return(
        <>
            <div className="about-page__container" >
                <div className="about-page__top">
                    <h4>Members of BorrowMy</h4>
                </div>
                <div className="about-page__middle" >
                    <div className="about-page__profile">
                        <img className="about-page__image" src={kevin} />
                        <p className="about-page__designation"><strong className="about-page__name">Kevin</strong>  CEO, BorrowMY</p>
                    </div>
                    <div className="about-page__profile">
                        <img className="about-page__image" src={bonnie} />
                        <p className="about-page__designation"><strong className="about-page__name">Bonnie</strong>  Business Analyst, BorrowMY</p>
                    </div>
                    <div className="about-page__profile">
                        <img className="about-page__image" src={samuel} />
                        <p className="about-page__designation"><strong className="about-page__name">Samuel</strong>  Full stack Developer, BorrowMY</p>
                    </div>
                    <div className="about-page__profile">
                        <img className="about-page__image" src={krishna} />
                        <p className="about-page__designation"><strong className="about-page__name">Krishna</strong>  Full stack developer, BorrowMY</p>
                    </div>
                </div>
                <div className="about-page__bottom" >

                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;