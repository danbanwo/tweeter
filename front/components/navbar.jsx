import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
var $ = require("jquery");

const Navbar = React.createClass({

	showNavi() {
		{
			// JQUERY FOR THE NAVBAR

			$('.handle').on('click', function() {
				$('nav ul').toggleClass('showing')
			})
		}
	},

	render: function() {
		return (
		    <div className="navi">
		    	

			    	<center>
				    	<nav>
				    		<ul>
				    			<li>Featured</li>
				    			<li>Sports</li>
				    			<li>News</li>
				    			<li>Entertainment</li>
				    			<li>Music</li>
				    			<li>Lifestyle</li>
				    			<li><span className="glyphicon glyphicon-search" id="searchicon"></span></li>
				    		</ul>

				    		<div className="handle" onClick={this.showNavi}>
				    			<span className="glyphicon glyphicon-menu-hamburger" id="ham"></span>
				    		</div>

				    	</nav>
			    	</center>
			    	
		    </div>
		)
	}
})






export default Navbar