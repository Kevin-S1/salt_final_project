import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
import Listings from "./Components/Listings/Listings";
import Loans from "./Components/Loans/Loans";
import {useAuth0} from "@auth0/auth0-react";
import AddToy from "./Components/AddToy/AddToy";
import Toy from "./Components/Toys/Toy";

import {InitialUserDetails, toy} from "./types";


function App() {
    
    const [initialUserDetails, setInitialUserDetails] = useState<InitialUserDetails>();
    const [toys,setToys] = useState<Array<toy>>();
    const { isAuthenticated, user } = useAuth0();
    
    const userDetails = {
        name: user?.name,
        email: user?.email,
        sub: user?.sub,
        picture: user?.picture
    }
    const GetToysData =async () =>{
        const response = await fetch('https://localhost:7275/api/toys',{
            method:'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();

        const updatedToysInformation: Array<toy> = data.map((toy:any) => {
            const newToy = {
                name:'',
                description:'',
                userId:0
            };

            newToy.name = toy.name;
            newToy.description = toy.description;
            newToy.userId =toy.userId;

            return newToy;
        })
        setToys(updatedToysInformation);
    }
    useEffect(() =>{
        console.log(toys)
        }, 
        [toys]
    )

    
    const postUserData =async () =>{
        const response = await fetch('https://localhost:7275/api/Users',{
            method:'POST',
            body:JSON.stringify(userDetails),
            headers: {
                "Content-Type": "application/json"
            }
        })
       
        const data = await response.json();
        setInitialUserDetails(data)
        console.log(initialUserDetails);
    }

    useEffect(()=>{
        if(isAuthenticated) { 
            postUserData();
        }
    },[isAuthenticated]);

    useEffect(()=>{
        GetToysData();
    },[]);
    
  return (
    <>
      <NavBar />
        <Routes>
            <Route path='/profile' >
                <Route path='details' element={<Details />}/>
                <Route path='listings' element={<Listings />}/>
                <Route path='details' element={<Loans />}/>
            </Route>
            <Route path='add' element={<AddToy initialUserDetails={initialUserDetails} />}  />
            <Route path='/' element={ <Home /> }>Home</Route>
            <Route path='/toys' element={ <Toy toys={toys}/>}>
                {/*<Route path=':id' element={<ToyDetails />}*/}
            </Route>
            
        </Routes>
    </>
  );
}

export default App;
