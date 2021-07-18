import logo from '../images/logo.png';
import { client_id, scope, state, redirect_uri, domain_url, allow_signup } from "../shared/authConfig"
import { logoutHandler } from '../shared/customUtils';
function Header() {

	return <div className="outer">
		<nav className="navbar navbar-expand-lg">
			<img className="logo" src={logo} />
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">Services</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Product</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Technology</a>
					</li>
					{sessionStorage.getItem('accessToken') &&
						<li className="nav-item">
							<a className="nav-link" href="/about">About <i class="fas fa-angle-down"></i></a>
						</li>
					}
					<li className="nav-item">
						<a className="nav-link" href="#">Client <i class="fas fa-angle-down"></i></a>
					</li>
					{sessionStorage.getItem('accessToken') ?
						<li className="nav-item">
							<a className="nav-link" href="" onClick={logoutHandler}>Logout</a>
						</li>
						:
						<li className="nav-item">
							<a className="nav-link" href={`${domain_url}/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}&allow_signup=${allow_signup}`}>Login</a>
						</li>
					}
				</ul>
				<div className='nav-icon'>
					<span><i className="fas fa-home"></i></span>
					<span><i className="fas fa-envelope"></i></span>
					<span><i className="fas fa-random"></i></span>
				</div>
			</div>
		</nav>
	</div>
}

export default Header;