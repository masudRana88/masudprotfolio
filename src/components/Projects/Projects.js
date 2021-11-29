import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import travel from "../../Images/taravel.png"
import oda from "../../Images/oda.png"
import orbit from "../../Images/orbit.png"
const Projects = () => {
    return (
        <Container className="mt-4" id="protfoio">
                <strong className="fs-5">My Projects_</strong>
            <div data-aos="fade-up" class="alert alert-dismissible alert-primary mt-3">
                <Row>
                    <Col sm={12} md={4} lg={4}>
                        <img src={travel} alt="" className="img-fluid" />
                    </Col>
                    <Col sl={12} md={8} lg={8}>
                        <strong className="fs-4">Travel tour</strong>
                        <p>Overview :
                            In This project Admin can update, Add or Delete services.
                            The backend Server of this project is Heroku and the database is MongoDB.
                            I use Firebase as a Authentication
                        </p>
                        <p>Technologies : React, Bootstrap, Firebase, Heroku, Node.js, MongoDB</p>
                        <a href="https://travel-tour-97a64.firebaseapp.com/home" target="_blank" className="btn btn-outline-primary me-2 mt-2"><i class="fas fa-external-link-alt me-1"></i> VIEW</a>
                        <a href="https://github.com/masudRana88/travel-tour" target="_blank" className="btn btn-outline-primary me-2 mt-2"><i class="fab fa-github me-1"></i> GitHub Code Link</a>
                        <a href="https://github.com/masudRana88/travel-tour-server" target="_blank" className="btn btn-outline-primary mt-2"><i class="fas fa-server me-1"></i>GitHub Server Code Link</a>
                    </Col>
                </Row>
            </div>
            <div data-aos="fade-up" class="alert alert-dismissible alert-primary mt-3">
                <Row>
                    <Col sm={12} md={4} lg={4}>
                        <img src={oda} alt="" className="img-fluid" />
                    </Col>
                    <Col sl={12} md={8} lg={8}>
                        <strong className="fs-4">Ora Car's</strong>
                        <p>Overview :
                           In this Project Admin can add, Delete  and Update a product.
                           Also Admin can manage user order and make a User an Admin.
                           I Implement CRUD operation with MongoDB and Authentication system used with Firebas
                        </p>
                        <p>Technologies : React, Bootstrap, Firebase, Heroku, Node.js, MongoDB</p>
                        <a href="https://oda-car.firebaseapp.com/" target="_blank" className="btn btn-outline-primary me-2 mt-2"><i class="fas fa-external-link-alt me-1"></i> VIEW</a>
                        <a href="https://github.com/masudRana88/ODA-CARS" target="_blank" className="btn btn-outline-primary me-2 mt-2"><i class="fab fa-github me-1"></i>GitHub Code Link</a>
                        <a href="https://github.com/masudRana88/ODA-CARS-server" target="_blank" className="btn btn-outline-primary mt-2"><i class="fas fa-server me-1"></i>GitHub Server Code Link</a>
                    </Col>
                </Row>
            </div>
            <div data-aos="fade-up" class="alert alert-dismissible alert-primary mt-3">
                <Row>
                    <Col sm={12} md={4} lg={4}>
                        <img src={orbit} alt="" className="img-fluid" />
                    </Col>
                    <Col sl={12} md={8} lg={8}>
                        <strong className="fs-4">Orbit Eye Center</strong>
                        <p>Overview :
                           It is a Responsive hospital service website
                        I use the Firebase authentication system. 
                        I  Implement Context API, React Hooks, React Router
                        </p>
                        <p>Technologies : React, Bootstrap, Firebase</p>
                        <a href="https://orbit-eye-center-b5e84.firebaseapp.com/" target="_blank" className="btn btn-outline-primary me-2 mt-2"><i class="fas fa-external-link-alt me-1"></i> VIEW</a>
                        <a href="https://github.com/masudRana88/orbit-eye-center" target="_blank" className="btn btn-outline-primary me-2 mt-2"><i class="fab fa-github me-1"></i> GitHub Code Link</a>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Projects;