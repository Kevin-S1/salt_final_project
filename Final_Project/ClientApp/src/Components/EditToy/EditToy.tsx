import React, {useEffect, useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './editToy.css'
import {useNavigate, useParams} from "react-router-dom";
import {toyDetails} from "../../types";
import {InitialUserDetails} from "../../types";
import Toy from "../Toys/Toy";
import {Button, Form} from "react-bootstrap";
import SuccessMsg from "../SuccessMsg/SuccessMsg";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../Firebase";

const EditToy = () => {

    const params = useParams();
    const [category, setCategory] = useState(0);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [age, setAge] = useState(0);
    const [toy, setToy] = useState<toyDetails>();
    const [successStatus, setSuccessStatus] = useState(false);
    const [image, setImage] = useState('');
    
    const submitHandler = async (e: any) => {
        e.preventDefault();
        if(toy !== undefined){
            let downloadURL = '';
            const id = Date.now();
            const storageRef = await ref(storage, 'Toys/' + id);
            const snapshot = await uploadBytes(storageRef, e.target[4].files[0])
            downloadURL = await getDownloadURL(ref(snapshot.ref));
            await setImage(downloadURL);

            const newToy = toy;
            newToy.name = name;
            newToy.description = description;
            newToy.age = age;
            newToy.category = category;
            newToy.image = downloadURL;
            
            await fetch(`https://localhost:7275/api/toys/` + params.id,{
                method:'PUT',
                body:JSON.stringify(newToy),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            setSuccessStatus(true);
            setTimeout(() => { setSuccessStatus(false)},4000)
        }
    }
    
    const GetToysData = async () =>{
        const response = await fetch('https://localhost:7275/api/toys/getbyid/' + params.id,{
            method:'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        await setToy(data);
    }
    
    const nameChangeHandler = (e: any) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const descriptionChangeHandler = (e: any) => {
        e.preventDefault();
        setDescription(e.target.value);
    }

    const categoryChangeHandler = (e: any) => {
        e.preventDefault();
        setCategory(parseInt(e.target.value));
    }

    const ageChangeHandler = (e: any) => {
        e.preventDefault();
        setAge(parseInt(e.target.value));
    }
    
    const imageChangeHandler = (e: any) => {
        e.preventDefault();
        setImage(e.target.value);
    }
    
    useEffect(() => {
        GetToysData();
    },[])

    useEffect(() => {
        if(toy !== undefined){
            setCategory(toy.category);
            setAge(toy.age);
            setName(toy.name);
            setDescription(toy.description);
            setImage(toy.image);
        }
    },[toy])
    
    return (
        <section className='edit--toy--container'>
            {successStatus ? <SuccessMsg message='The item has been updated!'/> : <></>}
            <article className='edit--form--container'>
                <form onSubmit={e => submitHandler(e)} className='edit--form'>
                    <label className='edit--label' htmlFor='title' >Title</label>
                    <input className='edit--input' type='text' id='title' onChange={e => nameChangeHandler(e)} defaultValue={name}/>
                    <label className='edit--label' htmlFor='description'>Description</label>
                    <textarea className='edit--input' cols={30} rows={7} id='description' onChange={e => descriptionChangeHandler(e)} defaultValue={description}/>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <select value={category}  onChange={e => categoryChangeHandler(e)}>
                            <option value="0">All</option>
                            <option value="1">Lego</option>
                            <option value="2">Puzzle</option>
                            <option value="3">Dolls</option>
                            <option value="4">Vehicles</option>
                            <option value="5">Battery Operated</option>
                            <option value="6">Wooden Toys</option>
                            <option value="7">Board Games</option>
                        </select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Age Category</Form.Label>
                        <select value={age} onChange={e => ageChangeHandler(e)}>
                            <option value="0">All</option>
                            <option value="1">0-1</option>
                            <option value="2">2-4</option>
                            <option value="3">5-6</option>
                            <option value="4">7-10</option>
                            <option value="5">10+</option>
                        </select>
                    </Form.Group>
                    <label htmlFor='image'>Image</label>
                    <input type='file' id='image'/>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </form>
            </article>
        </section>
    );
};

export default EditToy;