import React from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
import { ContentCard } from '../utils/ContentCard';
import {projects} from './ProjectDataProvider'



export const Projects = () => {
  console.log(projects)
  const renderProjects = () => {
    return (
      <Spring
        from={{opacity:0}}
        to={{opacity:1}}
        config={{duration:1500}}
      >
        {props => (
          <div style={props}>
            {projects.map(p => {
              return (
                <div className="project-card" key={p.id}>
                  <div className="project-wrapper">
                    <h1 className="project-title">{p.title}</h1>
                    <img src={p.image} />
                    <p>{p.description}</p>
                    <div>Find out more here: <a onClick={console.log(p.link)} target="_blank">Link</a></div>
                  </div>
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