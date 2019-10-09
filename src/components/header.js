import React from 'react';
import { Link } from 'react-router-dom';

const header = ({ text, image }) => {
  if(text) {
    return (
      <div className="page-head-wrap">
        <h1>{text}</h1>
        <img src={image} />
      </div>
    )
  }
  return (
  <img src={image} />  
  )
}

export default header;