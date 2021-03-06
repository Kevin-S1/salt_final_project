import React, {useEffect, useState} from 'react';
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

import {InitialUserDetails, toyDetails} from "./types";
import ToyDetails from "./Components/ToyDetails/ToyDetails";
import AboutPage from "./Components/About/AboutPage";
import ContactPage from "./Components/Contact/ContactPage";
import EditToy from "./Components/EditToy/EditToy";


function App() {
    
    const [initialUserDetails, setInitialUserDetails] = useState<InitialUserDetails>();
    const [toys,setToys] = useState<Array<toyDetails>>();
    
    const { isAuthenticated, user } = useAuth0();
    
    const userDetails = {
        name: user?.name,
        email: user?.email,
        sub: user?.sub,
        picture: user?.picture
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
    }

    useEffect(()=>{
        if(isAuthenticated) { 
            postUserData();
        }
    },[isAuthenticated]);
    
  return (
    <>
      <NavBar />
        <Routes>
            <Route path='/profile' >
                <Route path='details' element={<Details initialUserDetails={initialUserDetails}/>}/>
                <Route path='listings' element={<Listings initialUserDetails={initialUserDetails} />}/>
                <Route path='loans' element={<Loans initialUserDetails={initialUserDetails} />}/>
            </Route>
            <Route path='/edittoy/:id' element={ <EditToy /> } />
            <Route path='add' element={<AddToy initialUserDetails={initialUserDetails} />}  />
            <Route path='/' element={ <Home /> } />
            <Route path='/toys' element={ <Toy getToys={true} initialUserDetails={initialUserDetails}/>} />
            <Route path='/about' element={ <AboutPage /> } />
            <Route path='/contact' element={ <ContactPage />} />
            <Route path='/toys/:id' element={<ToyDetails initialUserDetails={initialUserDetails}/>} />
        </Routes>
    </>
  );
}

export default App;
