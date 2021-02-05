import React from 'react';
import { Spring } from "react-spring/renderprops";
import { copyTechData } from "./TechnologyData";
import '../tech/Technologies.css'


export const Technologies = () => {
  return (
      <Spring
      from={{marginLeft: 2000, marginRight: -2000}}
      to={{marginLeft: 0, marginRight: 0}}
      config={{tension:25, friction:8}}>
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