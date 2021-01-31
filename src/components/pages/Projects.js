import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { ContentCard } from '../utils/ContentCard';



export const Projects = () => {

  const renderProjects = () => {
    return (
      <Spring
        from={{opacity:0}}
        to={{opacity:1}}
        config={{duration:1500}}
      >
        {props => (
          <div style={props}>
            <ContentCard title={"Projects"} />
          </div>
        )}
      </Spring>
      )
  }

  return renderProjects()
}