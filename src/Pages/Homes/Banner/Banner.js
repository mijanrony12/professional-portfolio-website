import React from 'react';
import './Banner.css'
import { Container } from 'react-bootstrap';
import mijanImage from '../../../images/formal.jpg'
import { Link } from 'react-router-dom';
import 'animate.css';
import Typewriter from 'typewriter-effect';


const Banner = () => {
    return (
        <>
           
            <Container className="mt-5">
                 <div className="banner">
                             <div>
                                  <img src={mijanImage}   alt="" />
                             </div>
                    <div className="details">
                                 <h1 class="animate__animated animate__backInRight">Hi, I am <span >Mijanur Rahman</span> </h1>
                                        <Typewriter
                            onInit={ (Typewriter) => {
                                Typewriter
                                .typeString("<h5 >I am a Jr. Front End Developer with project experience</h5>").start()
                                  }}
                                />
                                  <a href="https://drive.google.com/file/d/1fHCAVRpOptkNQwGmZrg5kvCoPGIPvsGw/view?usp=sharing" target="blank">Download Resume</a>
                                   <Link to="/about">About Me</Link>
                    </div>
                   
                </div>
                 <marquee width="100%" direction="right"  >
                                  Mijanur Rahman a Passionate Front End developer.
                     </marquee>
        </Container>
           
        </>
    );
};

export default Banner;