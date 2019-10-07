import React from "react"

const Qdate = ({ question, id }) => (
  <div className="qwrap qwrap-text">
    <label htmlFor={id}>{question}</label>
    <div className="datewrap">
      <input id={`${id}-day`} type="tel" maxLength="2" placeholder="DD" />
      <input id={`${id}-month`} type="tel" maxLength="2" placeholder="MM" />
      <input id={`${id}-year`} type="tel" maxLength="4" placeholder="YYYY" />
    </div>
  </div>
)

export default Qdate
