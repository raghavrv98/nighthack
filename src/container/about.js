import React from 'react';
import axios from 'axios';
import Header from '../components/header';
import logo from '../images/logo.png'

class Home extends React.Component {

	componentDidMount() {
		if (!sessionStorage.getItem('accessToken')) {
			this.props.history.push('/');
		}
	}

	render() {
		return <div>
			<Header />
			<section className="about-page">
				<div className="heading">
					<img src={logo} />
					<h3>Matteo Mazzarolo</h3>
				</div>
				<p>Hey there ! I am using GitHub.</p>

				<div className="follower">
					<span><i class="fas fa-users"></i>0 <span>followers</span></span>.
					<span><i class="fas fa-users"></i>0 <span>following</span></span>
					<span><i class="fas fa-asterisk"></i>6</span>
				</div>

			</section>
		</div >
	}
}

export default Home;