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
						<h1>WebPack 2 Project Kickstarter</h1>

						<p>You can use this project to kickstart the development for your React Redux app.</p>

						<h2>Configuration includes the following:</h2>

						<div className="grid">

							<div className="item">
								<p>
									<i className="fa fa-4x fa-cogs" aria-hidden="true"></i>
									SASS compiling &amp; hot reloading
								</p>
							</div>

							<div className="item">
								<p>
									<i className="fa fa-4x fa-picture-o" aria-hidden="true"></i>
									Image optimization (JPG, PNG, GIF &amp; SVG)
								</p>
							</div>

							<div className="item">
								<p>
									<i className="fa fa-4x fa-code" aria-hidden="true"></i>
									HTML, JS and CSS minifying
								</p>
							</div>

						</div>

						<h2>Also included:</h2>

						<div className="grid">

							<div className="extra-item">
								<p>
									<i className="fa fa-2x fa-external-link" aria-hidden="true"></i>
									<a href="http://getbootstrap.com/" target="_blank">Bootstrap 3 library</a>
								</p>
							</div>

							<div className="extra-item">
								<p>
									<i className="fa fa-2x fa-external-link" aria-hidden="true"></i>
									<a href="http://fontawesome.io/" target="_blank">FontAwesome library</a>
								</p>
							</div>

							<div className="extra-item">
								<p>
									<i className="fa fa-2x fa-external-link" aria-hidden="true"></i>
									<a href="http://l-lin.github.io/font-awesome-animation/" target="_blank">FontAwesome Animation library</a>
								</p>
							</div>

						</div>
					</div>
				</div>
		  	</div>
		)
	};
};

export default App;