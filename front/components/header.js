import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

const Header = () => (
    <div className="siteHeader">
    	<div className="container">
	        <div className="row">
			  
		  	{
	    		// THE LOGO ON THE LEFT
	    	}
			  <div className="col-md-4">

		      		<span className="fa fa-user-circle-o" aria-hidden="true" id="logo"></span>

			  </div>
			  
			{
	        	// THE MIDDLE QUOTE
	        }
			  <div className="col-md-4">

	        		<center><h1 id="headertext">Whats cooking?</h1></center>

			  </div>
			  
			{
	        	// THE SIGN UP/ LOGIN BUTTONS ON THE FAR RIGHT
	        }
			  <div className="col-md-4">

	          		<button id="signup">SIGN UP</button>
	          		<button id="login">LOGIN</button>

			  </div>

			</div>

		</div>

    </div>
)

export default Header