import React from "react"
import { Link } from "react-router-dom"
import Drivercheckbox from "../components/molecules/drivercheckbox"
const Qcheckdrivers = ({ id, question, options, link, linkDest, theDrivers }) => {
  const theLink = link ? <Link to={linkDest}><p className='checkbox-link'>{link}</p></Link> : ""
  return (
  <div className="qwrap qwrap-checkbox">
    <p className="question">{question}</p>
    {options.map(option => {
      return (<Drivercheckbox key={option} option={option} theDrivers={theDrivers} id={id}/>
        
      )
    })}
    {theLink}
  </div>
  )
}

export default Qcheckdrivers
