import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div id="home" className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundImage: `url(${require('../images/home.jpg')})` }}>
            <div className='container'>
                <div>
                    <h1 className='w-50' style={{ fontFamily: 'Silkscreen', fontSize: '60px', color: 'white' }}>
                        Your one-stop video game center
                    </h1>
                    <Link to="shop" smooth={true} duration={500}>
                        <a href="#" className="btn text-light rounded-pill px-4 py-2" style={{ backgroundColor: "#FF0F7B" }}>
                            <span className="me-2 text-light" style={{ color: '#7808d0' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                            </span>
                            SHOP NOW
                        </a>
                    </Link>
                </div>
            </div>
        </div>
        
    );
};

export default Home;
