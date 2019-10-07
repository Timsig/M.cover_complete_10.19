import React from "react"

const Qradio = ({ id, question, options }) => (
  <div className="qwrap qwrap-checkbox" id={id}>
    <p className="question">{question}</p>
    {options.map(option => {
      return (
        <div key={option} className="checkbox-wrap">
          <input type="radio" id={option} name={id} value={option} />
          <label htmlFor={option}>{option}</label>
        </div>
      )
    })}
  </div>
)

export default Qradio
