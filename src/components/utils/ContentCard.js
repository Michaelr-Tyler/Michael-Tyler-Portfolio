import React from 'react';
import './ContentCard.css'

export const ContentCard = (props) => {
  return (
          <div className="content-card">
            <h1 className="content-title">{props.title}</h1>
            <p className="content-context">{props.content}</p>
          </div>
    )
}