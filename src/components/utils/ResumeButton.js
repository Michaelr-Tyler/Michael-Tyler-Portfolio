import React from 'react';
import Resume from '../../images/me/MichaelTylerFullstackDeveloper.pdf'

export const ResumeButton = () => {
  return <a href={Resume} rel="noreferrer" target="_blank" className="button">Resume</a>
}