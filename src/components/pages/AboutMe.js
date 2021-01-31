import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { ContentCard } from '../utils/ContentCard';



export const AboutMe = () => {

  const renderAboutMe = () => {
    return (
      <Spring
        from={{opacity:0}}
        to={{opacity:1}}
        config={{duration:1500}}>
        {props => (
          <div style={props}>
            <ContentCard title={'About Me'} />
          </div>
        )}
      </Spring>
      )
  }
  return renderAboutMe()
}