import React from "react"

const Prepop = ({ id, textbefore = "", textafter = "", options, ref, onChange }) => {
  
    let beforeString = ""
    if (textbefore) {
      beforeString = <span>{ textbefore }</span>
    }
  
    return (
      <div className="prepop-wrap">
        <p>
          
          {beforeString}
          <select id={id} ref={ref} onChange={onChange}>
            {options.map(option => {
              return (
                <option value={option} key={option}>
                  {option}
                </option>
              )
            })}
          </select>
          <span>{textafter}</span>
        </p>
      </div>
    )
  }
export default Prepop
