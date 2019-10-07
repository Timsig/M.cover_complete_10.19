import React from "react"

const Qtext = ({ question, id, reference }) => (
  <div className="qwrap qwrap-text">
    <label htmlFor={id}>{question}</label>
    <input id={id} name={id} ref={reference}/>
  </div>
)

export default Qtext
