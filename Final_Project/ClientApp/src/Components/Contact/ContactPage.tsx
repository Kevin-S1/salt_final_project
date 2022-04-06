import React, {useState} from 'react'
import './ContactPage.css'
import SuccessMsg from "../SuccessMsg/SuccessMsg";

const ContactPage = () => {
    const [showText,setShowtext] = useState(false);
    const [inputs, setInputs] = useState({
        firstName:"",
        lastName:"",
        email:"",
        description:""
    });

    const handleChange = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values:any)=> ({...values, [name]: value}))
    }
    const PostInformation =async (inputs : any) =>{
        const response = await fetch('https://localhost:7275/api/information',{
            method:'POST',
            body:JSON.stringify(inputs),
            headers:{
                'Content-type': 'application/json'
            }
        })
        console.log(response)
        if(response.status === 204){
            setShowtext(true);
            setTimeout(()=>{
                setShowtext(false);
            },8000)
        }

    }

    const handleSubmit = (event : any) => {
        event.preventDefault();
        PostInformation(inputs);
        setInputs({
            firstName:"",
            lastName:"",
            email:"",
            description:""
        })
    }
    return (
        <div className="contact-page-container">
            <div className="contact-page__header">
                <h2 className="contact-page__headertext">Contact Us!</h2>
            </div>
            <div className="contact-page-text">
                <p className="contact-page__textinfo"> If you need any information contact us by filling the details</p>
            </div>
            {showText ? <SuccessMsg message={'We will get back to you as soon as possible, thanks for contacting us.'} /> : <></>}
            <form onSubmit={handleSubmit} className='contact-page'>
                <label>First Name:
                </label>
                <input
                    className='contact-input-field'
                    type="text"
                    name="firstName"
                    value={inputs.firstName}
                    onChange={handleChange}
                    placeholder="Enter your firstname....."
                />
                <label>Last Name:
                </label>
                <input
                    className='contact-input-field'
                    type="text"
                    name="lastName"
                    value={inputs.lastName}
                    onChange={handleChange}
                    placeholder="Enter your lastname....."
                />
                <label>Email:
                </label>
                <input
                    className='contact-input-field'
                    type="email"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                    placeholder="Enter your email....."
                />
                <label>Short decription:
                </label>
                <textarea
                    name="description"
                    value={inputs.description}
                    onChange={handleChange}
                    className="contact-page-textarea"
                    rows={4}
                    cols={60}
                />
                <div className="contact-page-button">
                    <input type="submit" className="contact-page-submit"/>
                </div>
            </form>
        </div>
    )
}

export default ContactPage;