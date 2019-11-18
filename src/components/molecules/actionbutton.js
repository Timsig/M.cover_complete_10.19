import React from "react"

const Actionbutton = ({ rank, cta, id, action}) => (
    <button id={id} className={rank} type="submit" onClick={action} >
      {cta}
    </button>
)

export default Actionbutton