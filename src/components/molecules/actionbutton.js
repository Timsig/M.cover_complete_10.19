import React from "react"

const Actionbutton = ({ style, cta, id, action}) => (
    <button id={id} className={style} type="submit" onClick={action} >
      {cta}
    </button>
)

export default Actionbutton