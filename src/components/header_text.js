import React from 'react';
import { Link } from 'react-router-dom';

const headertext = ({ headline, subtext }) => {
 
  return (
    <div className="page-head-wrap">
      <h1>{headline}</h1>
      {subtext ? <p className="intro">{ subtext }</p> : ""}
    </div>
  )
}

export default headertext;