    import React from 'react';
    import { Navbar, Nav, Button } from 'react-bootstrap';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import '../assets/myfit-logo.png';

    const NavbarComponent = () => {
        return (
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                <Navbar.Brand href="#" className='mx-5'>
                    <img
                        alt="MyFitMantra Logo"
                        src={require('../assets/myfit-logo.png')}
                        width="150"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                    <Nav>
                        <Nav.Link href="#Home" className='text-white fw-bold fs-6'>HOME</Nav.Link>
                        <Nav.Link href="#AboutUs" className='text-white fw-bold fs-6 '>ABOUT US</Nav.Link>
                        <Nav.Link href="#Feature" className='text-white fw-bold fs-6 '>FEATURE</Nav.Link>
                        <Nav.Link href="#FindATrainer" className='text-white fw-bold fs-6 '>FIND A TRAINER</Nav.Link>
                        <Nav.Link href="#Blogs" className='text-white fw-bold fs-6 '>BLOGS</Nav.Link>
                        <Nav.Link href="#ContactUs" className='text-white fw-bold fs-6 '>CONTACT US</Nav.Link>
                        <Nav.Link href="#Career" className='text-white fw-bold fs-6 '>CAREER</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="ml-auto">
                    <Button href="#login" variant="outline-light text-white fw-bold navbar-button">
                        <span className='mx-3'>
                            Login
                        </span>
                    </Button>
                    <Button href="#getStarted" variant="outline-light text-white fw-bold mr-5 navbar-button">
                        <span className='mx-3'>
                            Get Started
                        </span>
                    </Button>
                </Nav>
            </Navbar>
        );
    };

    export default NavbarComponent;