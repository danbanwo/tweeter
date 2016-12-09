import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
var $ = require("jquery");

// IMPORT ALL THE COMPONENTS
import Header from './components/header.js';
import Navbar from './components/navbar.jsx';
import Home from './components/homebody.jsx'
import Footer from './components/footer.jsx'

const App = ()=>(
    <div className="tweet">
        <Header />
        <Navbar />
        <Home />  
        <Footer />  
    </div>

)

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)

