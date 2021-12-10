import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavHashLink, HashLink  } from 'react-router-hash-link';
import mahimResume from "../../Files/Masud_Resume.pdf"

const NavBar = () => {
    return (
        <div>
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
                        <HashLink className="nav-link" to="/home#hello">ABOUT ME</HashLink>
                        <Nav.Link href={mahimResume}>RESUME</Nav.Link>
                        <HashLink className="nav-link" to="/home#protfoio">PROTFOIO</HashLink>
                        <HashLink className="nav-link" to="/home#contact">CONTACT</HashLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;