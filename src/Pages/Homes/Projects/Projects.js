import React from 'react';
import './Projects.css'
import { Col, Container, Row } from 'react-bootstrap';
import project1 from '../../../images/project1.PNG'
import project2 from '../../../images/project2.PNG'
import project3 from '../../../images/project3.PNG'

const Projects = () => {
    return (
        <>
            
            <Container >
                 <h1 style={{color: '#e67e22', textAlign:'center', marginTop:'50px', marginBottom:'35px'}}>My Projects</h1>
                      <div className="row g-5 projects">
                              <div className="col-lg-4">
                                        <div className="project-details">
                                                <img src={ project1 } alt="" />
                                                <div className="content">
                                                    <h2>Car Dealer App</h2>
                                                    <p>this is a mern stack website. Users can buy a product, Confirm the order and user also can delete an order.</p>
                                                    <a href="https://car-dealer-app-fe152.web.app/" target="blank">This Live website</a>
                                                </div>
                                        </div>
                               </div>
                              <div className="col-lg-4">
                                    <div className="project-details">
                                                <img src={ project2 } alt="" />
                                                <div className="content">
                                                    <h2>TG-Tour-Agency</h2>
                                                    <p>this is  also a mern stack website. This is tour base package seller agency website. Users buy any package easily.</p>
                                                    <a href="https://gt-tour-agency.web.app/" target="blank">This Live website</a>
                                                </div>
                                        </div>
                               </div>
                              <div className="col-lg-4">
                                    <div className="project-details">
                                                <img src={ project3 } alt="" />
                                                <div className="content">
                                                    <h2>Prime HPT Ltd</h2>
                                                    <p>this is only client base website. This is the client based website You can purchase any service from here.</p>
                                                    <a href="https://prime-hospital-ltd.web.app/" target="blank">This Live website</a>
                                                </div>
                                        </div>
                               </div>
                        </div>
            </Container>
   
        </>
    );
};

export default Projects;