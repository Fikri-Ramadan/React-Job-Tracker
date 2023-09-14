import { Link } from 'react-router-dom';

import main from '../assets/images/main.svg';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        Job <span>Tracker</span> App
                    </h1>
                    <p>
                        Personal Job Tracker is a cutting-edge online platform
                        designed to empower job seekers like you in managing
                        every aspect of your job applications. With its
                        user-friendly interface and comprehensive features, the
                        platform aims to simplify your job search journey.
                    </p>
                    <Link to="/register" className="btn register-link">
                        Register
                    </Link>
                    <Link to="/login" className="btn">
                        Login
                    </Link>
                </div>
                <img src={main} alt="main" className="img main-img" />
            </div>
        </Wrapper>
    );
};

export default Landing;
