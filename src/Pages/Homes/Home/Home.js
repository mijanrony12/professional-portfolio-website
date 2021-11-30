
import React from 'react';
import { Container } from 'react-bootstrap';
import useProjects from '../../../Hooks/useProject';
import Footer from '../../Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';

const Home = () => {
    const [projects]=useProjects()
    return (
        <div>
            
            <Banner></Banner>
            <Container>
             <div className="row g-4">
                        <h1 style={{color: '#e67e22', textAlign:'center', marginTop:'50px', marginBottom:'35px'}}>My Projects</h1>
                        {
                            projects.map(project => <Projects
                                key={ project.id }
                                project={project}
                            ></Projects>)
                        }
            </div>
            </Container>
            <About/>
           
        </div>
    );
};

export default Home;