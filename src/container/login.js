import React from 'react';

import heroImage from '../images/heroImage.png'
import heroImage2 from '../images/heroImage2.png'
import productImg from '../images/productImg.png';
import serviceImg from '../images/serviceImg.png';
import technologyImg from '../images/technologyImg.png';

import Header from '../components/header';
import Footer from '../components/footer';

class Login extends React.Component {

	state = {
		name: "First Project",
	};

	render() {
		return <div>
			<section>
				<Header />
			</section>
			<section>
				<div className='landing-page'>
					<div class="row">
						<div class="col-md-6">
							<h1>Making the most of the ever-growing</h1>
							<h1>Information Technology</h1>
							<p>Managed by a team of professional experts with extensive experience and impressive track records</p>
							<button type="button" class="btn btn-primary">Read More</button>
						</div>
						<div class="col-md-6">
							<img src={heroImage} />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='hero-2-Background'>
					<div class="row">
						<div class="col-md-6">
							<img src={heroImage2} />
						</div>
						<div class="col-md-6 hero-2-text">
							<h2>Welcome to <span>Orizon</span></h2>
							<h2><span>Technologies</span></h2>
							<p>
								Dwidasa Samsara Indonesia (DSI) was firstly estabvlished in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span>DSI's</span> distinct front-end based application concept.
							</p>
							<p>
								Managed by a team of professional experts with extensive experience and impressive tracks records. <span>DSI</span> believes that continuos improvements and innovations assure your business to run effectively and efficiently.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="product-service-section">
					<h2 className="title">Product and Services</h2>
					<div className='row'>
						<div className='col-md-4 .col-sm-6'>
							<img src={productImg} />
							<h2>Our product</h2>
							<p>Our product is made on the base of our team's careful research and analyses . ranging from internet based</p>
							<p>application</p>
							<button type="button" class="btn btn-primary">Read More</button>
						</div>
						<div className='col-md-4 .col-sm-6'>
							<img src={serviceImg} />
							<h2>Our Service</h2>
							<p>DSI's shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</p>
							<button type="button" class="btn btn-primary">Read More</button>
						</div>
						<div className='col-md-4 .col-sm-6'>
							<img src={technologyImg} />
							<h2>Our Technology</h2>
							<p>First JAVA, runs on more than 850 million personal computrers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>
							<button type="button" class="btn btn-primary">Read More</button>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div >
	}
}

export default Login;