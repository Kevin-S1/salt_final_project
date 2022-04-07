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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sem dolor.
                            Pellentesque fringilla, odio at congue blandit, ligula orci viverra diam,
                            sit amet venenatis magna augue lobortis nunc. Nullam non egestas tortor.
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
                                href="https://linkedin.com"
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
                        <p>Bonnie is really cool and stuff. Sometimes she brings in sweeties, which is nice.</p>
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
                        <p>Samuel is really cool and stuff. He laughs a lot and swears even more.</p>
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
                    <div className="about-page__profile">
                        <img className="about-page__image" src={krishna} />
                        <p className="about-page__designation"><strong className="about-page__name">Krishna</strong>  Full stack developer, BorrowMY</p>
                        <p>Krishna is really cool and stuff. Krishna never sleeps, and knows lots of things.</p>
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

                </div>
                <div className="about-page__bottom" >

                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;