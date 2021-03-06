import React from 'react';
import meMain from '../../images/me/meMain.jpeg';
import { Spring } from 'react-spring/renderprops';
import './Intro.css';
import { ResumeButton } from '../utils/ResumeButton';


export const Intro = () => {
  return (
    <Spring
      from={{ marginLeft: 2000, marginRight: -2000}}
      to={{ marginLeft:0, marginRight: 0}}
      config={{tension: 25, friction:8}}>
      {props => (
        <div style={props}>
          <div className="intro-card">
              <div className="intro-heading">
                <h1 className="intro-title">Michael Tyler</h1>
                <h3 className="intro-subtitle">Software Developer</h3>
                <div className="resume-btn">
                  <ResumeButton />
                </div>
              </div>
              <div className="intro-image">
                <img src={meMain} alt={"Portfolio of Michael Tyler"} />
              </div>
          </div>
        </div>
      )}
    </Spring>
    )
    
  }
