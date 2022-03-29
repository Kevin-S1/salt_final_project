import React, {useEffect} from 'react';
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


function App() {
    const { isAuthenticated, user } = useAuth0();
    
    const userDetails = {
        name: user?.name,
        email: user?.email,
        sub: user?.sub,
        picture: user?.picture
    }
    
    const postUserData =async () =>{
        const response = await fetch('https://localhost:7275/api/Users',{
            method:'POST',
            body:JSON.stringify(userDetails),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    useEffect(()=>{
        if(isAuthenticated) {
            postUserData();
        }
    },[isAuthenticated])
    
  return (
    <>
      <NavBar />
        
        <Routes>
            <Route path='/profile' >
                <Route path='details' element={<Details />}/>
                <Route path='listings' element={<Listings />}/>
                <Route path='details' element={<Loans />}/>
            </Route>
            <Route path='add' element={<AddToy />}/>
            <Route path='/' element={ <Home /> }>Home</Route>
        </Routes>
    </>
  );
}

export default App;
