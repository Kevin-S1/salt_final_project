import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <Auth0Provider
        domain="dev-uycxki6e.us.auth0.com"
        clientId="KgsTFWpkP9Arw22jlcjMqH8FndNAmJd3"
        redirectUri={window.location.origin}
    >
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Auth0Provider>,
    document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
