import React from "react";
import './aboutpage.css';
import krishna from '../../krishna.png'
import bonnie from '../../bonnie.png'
import kevin from '../../kevin.png'
import samuel from '../../Samuel.png'
import Footer from "../Footer/Footer";
import {AiOutlineGithub, AiFillLinkedin} from "react-icons/ai"
import {Row} from "react-bootstrap";

const AboutPage = () => {
    return(
        <>
            <div className="about-page__top">
                <h4>Members of BorrowMy</h4>
            </div>
            <div className="about-page__container" >
                <div className="about-page__row">
                    <div className="about-page__profile">
                        <img className="about-page__image" src={kevin} />
                        <p className="about-page__designation"><strong className="about-page__name">Kevin Sips</strong></p>
                        <p className='about-paragraph'>Full stack .NET developer with a background in the finance and automotive industries.
                            I love programming since I enjoy problem solving and coming up with creative solutions!
                        </p>
                        <div className="about-page__socials">
                            <a
                                className='social-icon-link github'
                                href="https://github.com/Kevin-S1"
                                target='_blank'
                                rel="noopener"
                                aria-label='Github'
                            >
                                <AiOutlineGithub />
                            </a>
                            <a
                                className='social-icon-link linkedin'
                                href="https://www.linkedin.com/in/kevinsips/"
                                target='_blank'
                                rel="noopener"
                                aria-label='LinkedIn'
                            >
                                <AiFillLinkedin />
                            </a>
                        </div>

                    </div>
                    <div className="about-page__profile">
                        <img className="about-page__image" src={bonnie} />
                        <p className="about-page__designation"><strong className="about-page__name">Bonnie Mc Bride</strong></p>
                        <p className='about-paragraph'>Full Stack Developer with experience in C#, Python and JavaScript. I love building beautiful software that people will enjoy using.</p>
                        <div className="about-page__socials">
                            <a
                                className='social-icon-link github'
                                href="https://github.com/BonnieMcb"
                                target='_blank'
                                rel="noopener"
                                aria-label='Github'
                            >
                                <AiOutlineGithub />
                            </a>
                            <a
                                className='social-icon-link linkedin'
                                href="https://www.linkedin.com/in/bonnie-mcbride/"
                                target='_blank'
                                rel="noopener"
                                aria-label='LinkedIn'
                            >
                                <AiFillLinkedin />
                            </a>
                        </div>
                    </div>
                    {/*    <div className="about-page__middle" >*/}
                    {/*</div>*/}

                </div>
                <div className="about-page__row">
                    <div className="about-page__profile">
                        <img className="about-page__image" src={samuel} />
                        <p className="about-page__designation"><strong className="about-page__name">Samuel</strong>  Full stack Developer, BorrowMY</p>
                        <p className='about-paragraph'>Creative .Net fullstack developer that loves providing useful applications to people. My primary passions as of right now is Fishing and playing videogames</p>
                        <div className="about-page__socials">
                            <a
                                className='social-icon-link github'
                                href="https://github.com/Sam-OL"
                                target='_blank'
                                rel="noopener"
                                aria-label='Github'
                            >
                                <AiOutlineGithub />
                            </a>
                            <a
                                className='social-icon-link linkedin'
                                href="https://www.linkedin.com/in/samuel-%C3%B6hman-lebender-71b3a8212/"
                                target='_blank'
                                rel="noopener"
                                aria-label='LinkedIn'
                            >
                                <AiFillLinkedin />
                            </a>
                        </div>
                    </div>
                    <div className="about-page__profile">
                        <img className="about-page__image" src={krishna} />
                        <p className="about-page__designation"><strong className="about-page__name">Krishna</strong>  Full stack developer, BorrowMY</p>
                        <p className='about-paragraph'>Full stack developer with major in embedded electronics.
                            Worked as a Warehouse administrator and love building user friendly web applications with different stacks.</p>
                        <div className="about-page__socials">
                            <a
                                className='social-icon-link github'
                                href="https://github.com/krishnamohanparuchuri"
                                target='_blank'
                                rel="noopener"
                                aria-label='Github'
                            >
                                <AiOutlineGithub />
                            </a>
                            <a
                                className='social-icon-link linkedin'
                                href="https://www.linkedin.com/in/krishnamohanparuchuri/"
                                target='_blank'
                                rel="noopener"
                                aria-label='LinkedIn'
                            >
                                <AiFillLinkedin />
                            </a>
                        </div>
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