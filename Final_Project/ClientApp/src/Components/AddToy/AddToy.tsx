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

    const [toy, setToy] = useState<addToyDto>({name: "", description: "", userId: 0});
    
    const submitHandler = (e:any) => {
        e.preventDefault();
        if(isAuthenticated){
            setToy({ name:name, description:description, userId:props.initialUserDetails.id});
        }
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
                    <Button variant="primary" type="submit">
                        Add toy
                    </Button>
                </Form>
            </div>

        </>
    );
};

export default AddToy;