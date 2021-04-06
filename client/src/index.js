import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';
require('dotenv').config();
console.log(process.env.REST_API_KEY)

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,
    document.getElementById("root")
);
