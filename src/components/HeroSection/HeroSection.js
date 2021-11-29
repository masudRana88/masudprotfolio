import React, { useEffect } from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row, Table } from 'react-bootstrap';
import mahim from "../../Images/mahim.jpg"
import Aos from 'aos';
import mahimResume from "../../Files/Masud_Resume.pdf"


const HeroSection = () => {
     useEffect(() => {
        Aos.init({ duration: 1000 });
    },[])
    return (
        <Container className="mt-4">
            <Row>
                <Col md={6} lg={6} sm={12}>
                    <div data-aos="fade-right" class="card text-white bg-secondary mb-3" style={{maxWidth:"25rem"}}>
                        
                        <div class="card-body">
                            <img src={mahim} alt="" className="img-fluid rounded" />
                        </div>
                    </div>
                </Col>
                <Col data-aos="fade-left" md={6} lg={6} sm={12}>
                    <div className="personal-details-header">
                        <h2>Masud Rana_</h2>
                        <h6>JavaScript Developer | Front-end Developer_</h6>
                    </div>
                    <div className="personal-details-body">
                        <Row>
                            <Col lg={9} md={9} sm={12}>
                                <ListGroup>
                                    <div className="pt-2 ps-2 ">
                                        <table>
                                        <tr>
                                            <th scope="row">AGE :</th>
                                            <td>20</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">PHONE :</th>
                                            <td>+8801883315163</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">EMAIL :</th>
                                            <td>masud.rana12899@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th className="pe-1" scope="row">ADDRESS :</th>
                                            <td>Hemayetpur, Savar, Dhaka</td>
                                        </tr>
                                    </table>
                                    </div>
                                    <ListGroupItem>
                                        <a href="#" className="fs-4 me-2"><i class="fab fa-github"></i></a>

                                        <a href="#"  className="fs-4 me-2"><i class="fab fa-linkedin"></i></a>

                                        <a href="#" className="fs-4 me-2"><i class="fab fa-facebook-square"></i></a>
                                        <a href={mahimResume} className="fs-5 nav-link d-inline">RESUME <i class="fas fa-arrow-down"></i></a>
                                        
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HeroSection;