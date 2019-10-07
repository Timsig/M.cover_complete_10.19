import React from 'react';
import { Link } from 'react-router-dom';

const headertext = ({ headline }) => {
 
  return (
    <div className="page-head-wrap">
      <h1>{headline}</h1>
    </div>
  )
}

export default headertext;