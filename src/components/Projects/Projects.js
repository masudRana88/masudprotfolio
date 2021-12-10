import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import travel from "../../Images/taravel.png"
import oda from "../../Images/oda.png"
import orbit from "../../Images/orbit.png"
import Aos from 'aos';
import { useNavigate } from 'react-router';
const Projects = ({ projects }) => {
    const navigate = useNavigate()
    useEffect(() => {
    Aos.init({ duration: 1000 });
},[])
    return (
        <Container className="mt-4" id="protfoio">
            <strong data-aos="fade-up-right" className="fs-5">My Projects_</strong>
            {projects.map(project =><div data-aos="fade-left" class="alert alert-dismissible alert-primary mt-3">
                <Row>
                    <Col sm={12} md={4} lg={4}>
                        <img src={project.image.tham} alt="" className="img-fluid" />
                    </Col>
                    <Col sl={12} md={8} lg={8}>
                        <strong className="fs-4">{ project.name}</strong>
                        <p>Overview :
                            {project.Overview}
                        </p>
                        <p>Technologies : {project.Technologies.map(t =><span>{t}, </span>
                        )}</p>
                        <button className="btn btn-outline-primary me-2 mt-2" onClick={()=>navigate(`/project/${project.id}`)}>Details</button>
                    </Col>
                </Row>
            </div> )}
        </Container>
    );
};

export default Projects;