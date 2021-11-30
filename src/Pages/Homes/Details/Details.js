import React from 'react';
import './Details.css'
import { useParams } from 'react-router';
import useProjects from '../../../Hooks/useProject';
import Header from '../Header/Header';

const Details = () => {
    const { id } = useParams()
    const [ projects ] = useProjects()
    
    const myProject = projects.find(project => project.id == id)
    console.log(myProject)
    return (
        <>
            <div>
                
                <div className="mt-5">
                    <h1 style={ { color: 'white', textAlign:'center'}}>Project details:- {id}</h1>
                               <div className="row details">
                                          <div className="col-lg-4">
                                                   <img src={myProject?.img} alt="" />
                                           </div>
                                          <div className="col-lg-4">
                                                   <img src={myProject?.ss1} alt="" />
                                           </div>
                                          <div className="col-lg-4">
                                                   <img src={myProject?.ss2} alt="" />
                                           </div>
                               </div>
                    

                              <div className="content-details">
                                    <h1>{myProject?.name}</h1>
                                    <h4>{myProject?.title}</h4>
                                    <p>{ myProject?.desc }</p>
                                    <p>Technology: { myProject?.tech }</p>
                                       <div>
                                           <a href={myProject?.site} target="blank">Live Preview</a>
                                           <a href={myProject?.client} target="blank">Client Code </a>
                                           <a href={myProject?.server} target="blank">Server Code</a>
                                       </div>
                               </div>
                    </div>
            </div>
        </>
    );
};

export default Details;