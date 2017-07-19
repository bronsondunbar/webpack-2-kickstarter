import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
    	super(props)
  	};

	render () {
		return (
			<div>
				<div className="container">
					<i className="fa fa-5x fa-cog faa-spin animated" aria-hidden="true"></i>
					<h1>Webpack 2 Project Kickstarter</h1>

					<p>You can use this project to kickstart the development for your React Redux app.</p>

					<p>All webpack configurations has already been setup.</p>

					<h2>What's included?</h2>

					<ul>
						<li><a href="http://getbootstrap.com/" target="_blank">Bootstrap 3</a></li>
						<li><a href="http://fontawesome.io/" target="_blank">FontAwesome</a></li>
						<li><a href="http://l-lin.github.io/font-awesome-animation/" target="_blank">FontAwesome Animations</a></li>
					</ul>
				</div>
		  	</div>
		)
	};
};

export default App;