import React from 'react';
import { Spring } from 'react-spring/renderprops';





export const Contacts = () => {

  const renderContacts = () => {
    return (
      <Spring
        from={{opacity:0}}
        to={{ opacity:1}}
        config={{duration:1500}}>
        {props => (
          <div style={props}>

  
          </div>
        )}
      </Spring>
      )
  }

  return renderContacts()
}