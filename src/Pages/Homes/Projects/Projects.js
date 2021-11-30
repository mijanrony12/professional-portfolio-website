import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'



const Projects = ({ project }) => {
    const {name, title, id,img}=project
    return (
        <>
            
                              <div className="col-lg-4  projects">
                                        <div className="project-details">
                                                <img src={ img } alt="" />
                                                <div className="content">
                                                    <h2>{ name}</h2>
                                                    <p>{title}</p>
                                                   <Link to={`${id}`} >Project Details</Link>
                                                </div>
                                        </div>
                               </div>
                             
        </>
    );
};

export default Projects;