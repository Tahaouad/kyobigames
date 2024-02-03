import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavBar = () => {
    const customColor = '#6c3483';

    return (
        <Navbar expand="lg" className="fixed-top" style={{ backgroundColor: '#000123' }}>
                <Container className='w-100 mx-auto text-center'>
                <Navbar.Toggle aria-controls="navbarNav" style={{color:'#FF0F7B',backgroundColor:'#FF0F7B'}}/>
                <Navbar.Collapse id="navbarNav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#" className='fw-bold fs-6' style={{ color: '#FF0F7B', fontFamily: 'Silkscreen' }}>Kyobi games</Nav.Link>
                        <Link to="home" smooth={true} duration={700}>
                            <Nav.Link style={{ fontFamily: 'Orbitron',color: 'white' }} className='fw-3'>Home</Nav.Link>
                        </Link>
                        <Link to="shop" smooth={true} duration={700}>
                            <Nav.Link style={{ fontFamily: 'Orbitron',color: 'white' }} className='fw-3'>Shop</Nav.Link>
                        </Link>
                        <Link to="Collections" smooth={true} duration={700}>
                            <Nav.Link style={{ fontFamily: 'Orbitron',color: 'white' }} className='fw-3'>Collections</Nav.Link>
                        </Link>
                        <Link to="Reviews" smooth={true} duration={700}>
                            <Nav.Link style={{ fontFamily: 'Orbitron',color: 'white' }} className='fw-3'>Reviews</Nav.Link>
                        </Link>
                        <Link to="ContactUs" smooth={true} duration={700}>
                            <Nav.Link style={{ fontFamily: 'Orbitron',color: 'white' }} className='fw-3'>Contact</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;

