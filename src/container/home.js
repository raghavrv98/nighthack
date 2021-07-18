import React from 'react';
import { client_id, client_secret, redirect_uri } from "../shared/authConfig";
import axios from 'axios';
import getFormData from 'form-data-urlencoded';
import Header from '../components/header';
import logo from '../images/logo.png'

class Home extends React.Component {

	state = {
		name: "First Project"
	};

	componentDidMount() {
		if (!sessionStorage.getItem('accessToken')) {
			this.props.history.push('/');
		}
		const query = new URLSearchParams(this.props.location.search);
		const code = query.get('code');
		code && this.getTokenDetails();
	}

	getTokenDetails() {
		const query = new URLSearchParams(this.props.location.search);
		const code = query.get('code');
		const url = 'https://github.com/login/oauth/access_token';

		const data = {
			client_id,
			client_secret,
			code,
			redirect_uri
		}
		const formData = getFormData(data);

		axios.post(url, formData, { "Content-Type": "application/x-www-form-urlencoded" })
			.then((res) => {
				sessionStorage.setItem('accessToken', res.data);
				this.props.history.push('/home');
			})
			.catch((error) => {
				this.setState({
					message: "Some error occured",
				})
			});
	}
	render() {
		return <div>
			<Header />
			<section className="userDetails">
				<div>
					<img src={logo} />
					<h3>jacobkap<i class="fas fa-angle-down"></i></h3>
				</div>
				<hr></hr>
				<div className='repo-title'>
					<h4>Repositories</h4>
					<span><button type="button" class="btn btn-primary"><i class="fas fa-file-alt"></i> New</button></span>
				</div>
				<input placeholder="Find a repository..." />
				<ul>
					<li>Repo1</li>
					<li>Repo2</li>
					<li>Repo3</li>
				</ul>
				<hr></hr>
				<h4>Your teams</h4>
				<p>You don't belong to any teams yet!</p>

			</section>
		</div>
	}
}

export default Home;