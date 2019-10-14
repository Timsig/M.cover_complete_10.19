import React from "react"

const Qtext = ({ question, id, reference, textBefore }) => (
  <div className="qwrap qwrap-text">
    <label htmlFor={id}>{question}</label>
    <div className="inline-text">
      {textBefore && <p>{textBefore}</p>}<input id={id} name={id} ref={reference}/>
    </div>
  </div>
)

export default Qtext
