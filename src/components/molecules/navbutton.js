import { Link } from "react-router-dom"
import React from "react"

const Navbutton = ({ to = "#", style, cta, id, type, form }) => (
  <Link to={to}>
    <button id={id} className={style} type={type} form={form}>
      {cta}
    </button>
  </Link>
)

export default Navbutton
