import React, { useImperativeHandle } from 'react';
import { Spring } from 'react-spring/renderprops';
import {copyProjectData} from './ProjectDataProvider';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import './Projects.css';



export const Projects = () => {
  
 
  const renderProjects = () => {
    return (
      <Spring
        from={{opacity:0}}
        to={{ opacity:1}}
        config={{duration:1500}}
      >
        {props => (
          <div className="project-container" style={props}>
            {copyProjectData.map(p => {
               const handleLink =()=>{
                if(p.link){
                  return p.link
                } else if (p.clientRepo) {
                  return p.clientRepo
                }
              }
              return (
                  <div className="project-card" key={p.id}>
                      <img className="project-image" src={p.image} />
                    <a href={handleLink()} rel="noreferrer" target="_blank">
                      <div className="project-overlay">
                        <h1 className="project-title">{p.title}</h1>
                          <p className="project-description">{p.description}</p>
                      </div>
                    </a>
                  </div>
              )
            })}
          </div>
        )}
      </Spring>
      )
  }

  return renderProjects()
}