import React, {useEffect, useState} from "react";
import './addToy.css'
import {Button, Form} from "react-bootstrap";
import {addToyDto, InitialUserDetails} from "../../types";
import {useAuth0} from "@auth0/auth0-react";
import {create} from "domain";


const AddToy = (props : any) => {
   
    const { isAuthenticated} = useAuth0();
  
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [category, setCategory] = useState<number>(0)
    const [age, setAge] = useState<number>(0)
    
    const [toy, setToy] = useState<addToyDto>({name: "", description: "", userId: 0, category: 1, age: 1});
    
    const submitHandler = (e:any) => {
        e.preventDefault();
        if(isAuthenticated){
            setToy({ name:name, description:description, userId:props.initialUserDetails.id, category: category, age: age});
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
            console.log(await response.json())
            if(response.status === 204) {

                setName("");
                setDescription("");
            }
        }

    }
    useEffect(()=>{
        CreateToy();
    },[toy])
    
    return (
        <>
            <div>
                <h4>Add Toy: {props.initialUserDetails.id}</h4>
                
                <Form onSubmit={ (e) => submitHandler(e)}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="name"  value={name} onChange={e => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as='textarea' aria-rowcount={5} placeholder="Enter Description" name="description"  value={description} onChange={e => setDescription(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <select onChange={e => categoryChangeHandler(e)}>
                            <option value="0">Lego</option>
                            <option value="1">Puzzle</option>
                            <option value="2">Dolls</option>
                            <option value="3">Vehicles</option>
                            <option value="4">Battery Operated</option>
                            <option value="5">Wooden Toys</option>
                            <option value="6">Board Games</option>
                        </select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Age Category</Form.Label>
                        <select onChange={e => ageChangeHandler(e)}>
                            <option value="0">0-1</option>
                            <option value="1">2-4</option>
                            <option value="2">5-6</option>
                            <option value="3">7-10</option>
                            <option value="4">10+</option>
                        </select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add toy
                    </Button>
                </Form>
            </div>

        </>
    );
};

export default AddToy;