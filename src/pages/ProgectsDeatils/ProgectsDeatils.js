import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import projectData from "../../projectData"
const ProgectsDeatils = () => {
    const [projects, setProject] = useState([])
    const {id} = useParams()
    useEffect(() => {
        setProject(projectData)
    }, [])
    const project = projects.find(p => p.id == id)
    console.log(project)
    return (
        <div>
            <NavBar />
            <main className="mt-2 min-vh-100">
                <div className="ms-3">
                    <button class="btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
               </div>
                <div className="row mx-3 ">
                    
                <div className="col-sm-12 col-md-6 col-lg-6 ">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        {/* <div class="carousel-item active">
                        <img src={project?.image.img1} class="d-block w-100 img-fluid" alt="..."/>
                        </div> */}
                        <div class="carousel-item active">
                        <img src={project?.image.img2} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item ">
                        <img src={project?.image.img3} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item ">
                        <img src={project?.image.img4} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item ">
                        <img src={project?.image.img5} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item ">
                        <img src={project?.image.img6} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    </div>
                        
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 ">
                    
                    <div className="alert alert-dismissible alert-primary mt-3">
                        <h3>{project?.name}</h3>
                        <p className="badge bg-primary">Overview :</p>
                        <ul>
                                {project?.Overview.map(o => <li>{o}</li>)}
                        </ul>
                        <p className="badge bg-primary">Technologies</p>
                         <ul>
                            {project?.Technologies.map(o => <li>{o}</li>)}
                        </ul>
                        <a className="btn btn-outline-primary me-2 mt-2" href={project?.liveLink}>VIEW</a> 
                        <a className="btn btn-outline-primary me-2 mt-2" href={project?.codelink}>Code Link</a> 
                        {project?.servercode && <a className="btn btn-outline-primary me-2 mt-2" href={project?.servercode}>Server Code Link</a> }
                    </div>
                </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default ProgectsDeatils;