import React, {useEffect, useState} from "react";
import './addToy.css'
import {Button, Form} from "react-bootstrap";
import {toy} from "../../types";
import {useAuth0} from "@auth0/auth0-react";


const AddToy = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(user?.sub);
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const [toy, setToy] = useState<toy>({name: "", description: "", authId: ""});
    
    const submitHandler = (e:any) => {
        e.preventDefault();
        if(user?.sub !== undefined){
            setToy({ name:name, description:description, authId:user.sub });
        }
    }

    const UpdateToy = async()=> {
        if(isAuthenticated)
        {
            const response = await fetch(`https://localhost:7275/api/Toys/`,{
                method:'POST',
                body:JSON.stringify(toy),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if(response.status === 204) {

                setName("");
                setDescription("");
            }
        }

    }
    useEffect(()=>{
        UpdateToy();
    },[toy])
    
    return (
        <>
            <div>
                <h4>Add Toy:</h4>
                <Form onSubmit={ (e) => submitHandler(e)}>
                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="name"  value={name} onChange={e => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCountry">
                        <Form.Label>Country</Form.Label>
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