import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { ResumeButton } from '../utils/ResumeButton';
import './AboutMe.css'



export const AboutMe = () => {

  const renderAboutMe = () => {
    return (
      <Spring
      from={{ marginLeft: -2000, marginRight: 2000}}
      to={{ marginLeft:0, marginRight: 0}}
      config={{tension: 25, friction:8}}>
        {props => (
          <div style={props}>
            <div className="aboutme-card">
              <h1 className="aboutme-title">About Me</h1>
              <div className="aboutme-context">
                <p>Before beginning my journey into software development, I worked in the auto and hospitality industry. I enjoyed the auto industry because I was constantly learning and always problem-solving. In hospitality, I transferred those skills, alongside strengthening my communication skills while working in an agile team environment.</p>
                <p>When a coworker introduced me to software development, it piqued my interest and I began to see how I could continue to use these skills I had gained alongside taking on new challenges with each technology I came across. With all these things combined, I am excited to bring passion and pride to excel in this new world of tech.</p>
                <div className="aboutme-button">
                  <ResumeButton />
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
      )
  }
  return renderAboutMe()
}