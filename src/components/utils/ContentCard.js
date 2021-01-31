import React from 'react';
import './ContentCard.css'

export const ContentCard = (props) => {
  return (
          <div className="content-card">
            <h1 className="content-title">{props.title}</h1>
            {props.content ? <p>{props.content}</p> : ""}
          </div>
    )
}