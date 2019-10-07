import React from "react"
import { Link } from "react-router-dom"
const Qcheckbox = ({ id, question, options, link, linkDest }) => {
  const theLink = link ? <Link to={linkDest}><p className='checkbox-link'>{link}</p></Link> : ""
  return (
  <div className="qwrap qwrap-checkbox">
    <p className="question">{question}</p>
    {options.map(option => {
      return (
        <div key={option} className="checkbox-wrap">
          <input type="checkbox" id={option} name={id} value={option} />
          <label htmlFor={option}>{option}</label>
        </div>
      )
    })}
    {theLink}
  </div>
  )
}

export default Qcheckbox
