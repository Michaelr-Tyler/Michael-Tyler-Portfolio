import React from 'react';
import meMain from '../../images/me/meMain.jpeg';
import { Spring } from 'react-spring/renderprops';
import './Intro.css';


export const Intro = () => {
  return (
    <Spring
      from={{marginTop:2000}}
      to={{marginTop:75}}
      config={{tension:25, friction:8}}
    >
      {props => (
        <div style={props}>
            <div className="intro-card">
              <div className="intro-heading">
                <h1 className="intro-title">Michael Tyler</h1>
                <h3 className="intro-subtitle">Software Developer</h3>
              </div>
              <div className="intro-image">
                <img src={meMain} />
              </div>
            </div>
        </div>
      )}
    </Spring>
    )
    
  }
