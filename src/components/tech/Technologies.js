import React from 'react';
import { Spring } from "react-spring/renderprops";
import { copyTechData } from "./TechnologyData";
import '../tech/Technologies.css'


export const Technologies = () => {
  return (
      <Spring
      from={{opacity:0}}
      to={{opacity: 1}}
      config={{duration:2000}}>
      {props => (
        <div className="tech-container" style={props}>
          {copyTechData.map(t => {
            return (
              <div key={t.id} className="tech">
                <img className="tech-image" src={t.image} />
                <div className="tech-tip">{t.tech}</div>
              </div>
                
            )
          })
          }
        </div>
      )}
      </Spring>
  )
}