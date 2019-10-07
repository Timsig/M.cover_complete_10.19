import React from "react"

const Qnumbuttons = ({ id, question, options }) => (
  <div className="qwrap inline-radio-group numbers">
    <p className="question">{question}</p>
    {options.map(option => {
      return (
        <div key={id + option}>
          <input type="radio" id={id + option} name={id} value={option} />
          <label htmlFor={id + option}>{option}</label>
        </div>
      )
    })}
  </div>
)

export default Qnumbuttons
