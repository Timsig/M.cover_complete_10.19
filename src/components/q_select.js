import React from "react"

const Qselect = ({ id, question, options, reference }) => (
  <div className="qwrap qwrap-select">
    <label htmlFor={id}>{question}</label>
    <select id={id} reference={reference}>
      <option value="">-- Please select one --</option>
      {options.map(option => {
        return (
          <option value={option} key={option}>
            {option}
          </option>
        )
      })}
    </select>
  </div>
)

export default Qselect
