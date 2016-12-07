import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
var $ = require("jquery");

// IMPORT ALL THE COMPONENTS
import Header from './components/header.js';
import Navbar from './components/navbar.jsx';

const App = ()=>(
    <div className="tweet">
        <Header />
        <Navbar />        
    </div>

)

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)

