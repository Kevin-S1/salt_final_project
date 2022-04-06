import React from "react";
import './footer.css'
import {BsFacebook,BsWhatsapp} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-container__left">
                <p className="footer-container__contacttext">Contact us:</p>
                <div className="footer-container__logos">
                    <BsFacebook className="footer-container__icon" />
                   <AiFillTwitterCircle className="footer-container__icon" />
                    <BsWhatsapp className="footer-container__icon"/>
                </div>
            </div>
            <div className="footer-container__middle">
                <p>@copy right 2022, belongs to BorrowMy</p>
            </div>
            <div className="footer-container__right">
                <p>Organization : BorrowMy AB</p>
                <p>Organization Number : 123456-7890</p>
            </div>
        </div>
    )
};

export default Footer;