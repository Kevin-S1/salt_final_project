import React, {useEffect, useRef, useState} from "react";
import './addToy.css'
import {Button, Form} from "react-bootstrap";
import {addToyDto, InitialUserDetails} from "../../types";
import {useAuth0} from "@auth0/auth0-react";
import SuccessMsg from "../SuccessMsg/SuccessMsg";
import {useNavigate} from "react-router-dom";

import Footer from "../Footer/Footer";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {app, db, storage} from "../../Firebase";

const AddToy = (props : any) => {
    
    const { isAuthenticated, isLoading} = useAuth0();
  
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [category, setCategory] = useState<number>(0)
    const [age, setAge] = useState<number>(0)
    const [imageUrl, setImageUrl] = useState<string>("")
    const [successStatus, setSuccessStatus] = useState<boolean>(false);

    const [toy, setToy] = useState<addToyDto>({name: "", description: "", userId: 0, category: 1, age: 1, imgUrl: imageUrl});
    const navigate = useNavigate();
    let firstLoad = useRef(true);
    
    const submitHandler = async (e:any) => {
        e.preventDefault();
        let downloadURL = '';
        const id = Date.now();
        if(e.target[4].files[0] == undefined) {
            downloadURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvH7dMd3WcyQTNRr0sxQNzzK8UlZdBQpwKxQ&usqp=CAU';
        } else {
            const storageRef = await ref(storage, 'Toys/' + id);
            const snapshot = await uploadBytes(storageRef, e.target[4].files[0])
            downloadURL = await getDownloadURL(ref(snapshot.ref));
            await setImageUrl(downloadURL);
        }
        if(isAuthenticated){
            setToy({ name:name, description:description, userId:props.initialUserDetails.id, category: category, age: age, imgUrl: downloadURL});
        }
    }
    
    const categoryChangeHandler = (e: any) => {
        e.preventDefault();
        setCategory(parseInt(e.target.value));
    }

    const ageChangeHandler = (e: any) => {
        e.preventDefault();
        setAge(parseInt(e.target.value));
    }
    const CreateToy = async()=> {
        
        if(isAuthenticated)
        {
            const response = await fetch(`https://localhost:7275/api/toys/`,{
                method:'POST',
                body:JSON.stringify(toy),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if(response.status === 201) {
                setSuccessStatus(true);
                setName('');
                setDescription('');
                setImageUrl('');
            }
            setTimeout(() => { setSuccessStatus(false)},4000)
        }

    }
    useEffect(()=>{
        if(!firstLoad.current){
            CreateToy();
            navigate('/toys');
        }
        firstLoad.current = false;
    },[toy])
    
    return (
        <div className="add-toy-page__background">
            <div className="add-toy__page" >
                <h2 className='add-toy-header'>Lend out a toy</h2>
                { successStatus ? <SuccessMsg message="Toy has been added to your listings :)"/> : <></> }
                
                <Form className="add-toy__container" onSubmit={ (e) => submitHandler(e)}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className='add-toy-label'>Name</Form.Label>
                        <Form.Control className='add-toy-input' type="text" placeholder="Enter Name.." name="name"  value={name} onChange={e => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label className='add-toy-label'>Description</Form.Label>
                        <Form.Control className='add-toy-input' as='textarea' aria-rowcount={14} aria-colcount={20} placeholder="Enter Description.." name="description"  value={description} onChange={e => setDescription(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className='dropdown-container'>
                        <Form.Label className='add-toy-label'>Category</Form.Label>
                        <select className='add-toy-dropdown' onChange={e => categoryChangeHandler(e)}>
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
                    <Form.Group className='dropdown-container'>
                        <Form.Label className='add-toy-label'>Age Category</Form.Label>
                        <select className='add-toy-dropdown' onChange={e => ageChangeHandler(e)}>
                            <option selected value="0">All</option>
                            <option value="1">0-1</option>
                            <option value="2">2-4</option>
                            <option value="3">5-6</option>
                            <option value="4">7-10</option>
                            <option value="5">10+</option>
                        </select>
                    </Form.Group>
                    <div className='dropdown-container'>
                        <label className='' htmlFor='toyimage'>Toy image:</label>
                        <input className='image-upload-input' id='toyimage' type='file'/>
                    </div>
                    
                    <Button className="add-toy__orange-button" variant="primary" type="submit">
                        Add toy
                    </Button>
                </Form>
            </div>
            <Footer />
        </div>
    );
};

export default AddToy;