import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import mahimResume from "../../Files/Masud_Resume.pdf"

const NavBar = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/home">Masud Rana</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100%' }}
                        navbarScroll
                    >
                        <Nav.Link href="#hello">ABOUT ME</Nav.Link>
                        <Nav.Link href={mahimResume}>RESUME</Nav.Link>
                        <Nav.Link href="#protfoio">PROTFOIO</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavBar;