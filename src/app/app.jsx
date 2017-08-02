import React, { Component } from 'react';

import brandSvg from 'svg/brand.svg'

class App extends Component {
	constructor(props) {
    	super(props)
  	};

	render () {
		return (
			<div>
				<div className="container">
					<div className="wrapper">
						<img src={brandSvg} className="brand" />

						<h1>WebPack 2 Project Kickstarter</h1>

						<p>You can use this project to kickstart the development for your React Redux app.</p>

						<h2>Configuration includes the following:</h2>

						<div className="grid">

							<div className="item">
								<p>SASS compiling &amp; hot reloading</p>
							</div>

							<div className="item">
								<p>Image optimization (JPG, PNG, GIF &amp; SVG)</p>
							</div>

							<div className="item">
								<p>HTML minifying</p>
							</div>

							<div className="item">
								<p>JS and CSS minifying for production</p>
							</div>

						</div>

						<h2>Also included:</h2>

						<ul>
							<li><a href="http://getbootstrap.com/" target="_blank">Bootstrap 3 <i className="fa fa-external-link" aria-hidden="true"></i></a></li>
							<li><a href="http://fontawesome.io/" target="_blank">FontAwesome <i className="fa fa-external-link" aria-hidden="true"></i></a></li>
							<li><a href="http://l-lin.github.io/font-awesome-animation/" target="_blank">FontAwesome Animations <i className="fa fa-external-link" aria-hidden="true"></i></a></li>
						</ul>
					</div>
				</div>
		  	</div>
		)
	};
};

export default App;