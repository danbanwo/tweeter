import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

const Home = () => (
    <div className="home">
    	<div className="container">
	       
	       {
	       		// THE FOUR INITIAL BOXES INLUDING THE SIGN-UP FORM
	       }

	        <div className="row">
			  
				  <div className="col-md-3">
				  	  <div className="box" id="newsOne">

				  	  	<div className="boxheading">
					  	  	<p><strong>The Clintons have done enough damage: Steven Strauss</strong></p>
				  	  	</div>

				  	  	<a href="http://www.usatoday.com/story/opinion/2016/12/06/hillary-clinton-campaign-stupid-stuff-steven-strauss/94990920/" target="_blank">
					  	  	<div className="picdiv">
					  	  	</div>
				  	  	</a>

	       			  </div>
				  </div>
				  
				  <div className="col-md-3">
				  	  <div className="box">

				  	  	<div className="boxheading">
					  	  	<p><strong>Tom Brady leads Fantasy Hipsters overrated plays</strong></p>
				  	  	</div>

				  	  	<a href="http://www.nfl.com/fantasyfootball/story/0ap3000000752642/article/tom-brady-leads-fantasy-hipsters-overrated-plays" target="_blank">
					  	  	<div className="picdivtwo">
					  	  	</div>
				  	  	</a>

	       			  </div>
				  </div>
				  
				  <div className="col-md-3">
				  	  <div className="box">

				  	  	<div className="boxheading">
					  	  	<p><strong>How Kanye West’s Issues Have Caused Strain on His Marriage to Kim Kardashian</strong></p>
				  	  	</div>

				  	  	<a href="http://people.com/celebrity/kanye-west-issues-caused-strain-on-marriage-kim-kardashian/" target="_blank">
					  	  	<div className="picdivthree">
					  	  	</div>
				  	  	</a>

	       			  </div>
				  </div>

				  <div className="col-md-3">
				  	  <div className="box" id="signupform">

				  	  <center><p id="signintext"><strong>Sign into your account:</strong></p></center>

				  	  <center>
					  	  <form>
					  	  	<input type='text' placeholder='Enter your E-Mail...' className="enteremail" />
					  	  	<input type='text' placeholder='Password' className="enterpassword" />
					  	  	<p className="remforgot" id="rem">Remember me</p>
					  	  	<p className="remforgot" id="pwd">Forgot Password?</p>

					  	  	<button className="submitlogin">Submit</button>

					  	  </form>
				  	  </center>

	       			  </div>
				  </div>

			</div>


		</div>
    </div>
)

export default Home