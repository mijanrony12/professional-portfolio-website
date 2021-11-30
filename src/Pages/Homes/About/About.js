import React from 'react';
import './About.css'
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';

const About = () => {
    return (
        <>
              
            <Container>
                       <div>
                    <h1 style={ { color: '#e67e22', textAlign:'center', margin:'40px 0px 20px 0px'}}>About Me</h1>
                        <div className="about">
                               <div className='me'>
                                        <h1>Hey, I am <span>Mijanur Rahman</span> </h1>
                                        <h4>front-end-web-developer (react)</h4>
                                        <br />
                                        <p>I am an enthusiastic JavaScript developer with knowing some framework for the frontend and the backend. I know Basic PHP and MySQL but basically a MERN developer. I always focus on learning new technology. I am currently studying in the web development at programming hero.</p>
                                        <br />
                                        <p>I am a self-thought programmer. I try to develop the front end of a web application using 
                                                React.js and the front. I am always ready to learn any technology or language. I am thrilled 
                                               to be joining your company to enhance your company name and reputation day by day.</p>
                            
                                       <div className="icon">
                                               <h5>Connect With Me</h5>
                                               <a href="https://github.com/mijanrony12" target="blank"><i class="fab fa-github-square"></i></a>
                                               <a href="https://www.linkedin.com/in/mijanur-rahman-507a5b216/" target="blank"><i class="fab fa-linkedin"></i></a>
                                               <a href="mailto: mijaninfo12@gmail.com" target="blank"><i class="fas fa-envelope-square" ></i></a>
                                            <a href="https://www.facebook.com/mijan.rony.336/"  target="blank"><i class="fab fa-facebook-square"></i></a>
                                            <a href="https://www.instagram.com/mijan_rony/" target="blank"><i class="fab fa-instagram-square" ></i></a>
                                            <a href="https://twitter.com/mijan_rony" target="blank"><i class="fab fa-twitter-square" ></i></a>
                                       </div>
                              </div>
                              <div className='education'>
                                       <div>
                                            <h1>Education</h1>
                                         <div>
                                                <h5>BBS (noakhali Gov't college)</h5>
                                                <h6>2014-2019</h6>
                                         </div>
                                         <div>
                                                <h5>HSC (Khalilur Rahman degree college)</h5>
                                                <h6>2012-2014</h6>
                                         </div>
                                         <div>
                                                <h5>SSC (Abir para high school)</h5>
                                                <h6>2012</h6>
                                         </div>
                                         <div>
                                                <h5>web development at Programming hero</h5>
                                                <h6>2021</h6>
                                         </div>
                                   </div>
                                     <div >
                                          <h1>Skills</h1>
                                            <div>
                                                   <p>React js</p>
                                                   <p>React Router</p>
                                                   <p>JavaScript</p>
                                                   <p>ES6</p>
                                                   <p>Bootstrap</p>
                                                   <p>React-Bootstrap</p>
                                                   <p>Metarial UI</p>
                                                   <p>HTML5</p>
                                                   <p>CSS3</p>
                                                   <p>Axios</p>
                                                   <p>Node js</p>
                                                   <p>Express js</p>
                                                   <p>Mongo DB</p>
                                                   <p>Firebase</p>
                                                   <p>JWT</p>
                                                   <p>Netlify</p>
                                                   <p>Heroku</p>
                                                   <p>Git</p>
                                                   <p>Github</p>
                                                   <p>VS code</p>
                                                   <p>Chrome dev tool</p>
                                            </div>
                                   </div>
                              </div>
                        </div>
                </div>
                
            </Container>
        </>
    );
};

export default About;