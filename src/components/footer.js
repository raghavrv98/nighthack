
import logo from '../images/logo.png';
import mSilverLight from '../images/mSilverLight.jpg';
import mFramework from '../images/mFramework.png';
import java from '../images/java.png';
import ios from '../images/ios.png';
import android from '../images/android.png';
import blackBerryLogo from '../images/blackBerryLogo.jpg';

function Footer() {
	return <div>
		<footer>
			<div className="row">
				<div className='col-md-4 about'>
					<img src={logo} />
					<h4>Orizon Technologies Ltd</h4>
					<p>Ruko Jalur Sutera 29A No. 53</p>
					<p>Alam Sutera Sperong, Tangerang 15323</p>
				</div>
				<div className='col-md-3 contact'>
					<h2>Contact</h2>
					<p>Phone : +62.21.5341.1135</p>
					<p>Fax : +62.21.5341.1135</p>
					<p>Email : community@orizon.com</p>
				</div>
				<div className='col-md-5 logos'>
					<img src={mSilverLight} />
					<img src={mFramework} />
					<img src={java} />
					<img src={ios} />
					<img src={android} />
					<img src={blackBerryLogo} />
				</div>
			</div>
		</footer>
		<div className='bottom'>
			<p>Copyright &copy; 2021--Orizon Technologies Ltd</p>
		</div>
	</div>
}

export default Footer;