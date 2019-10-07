import { Link } from "react-router-dom"
import React from "react"

const Navbutton = ({ to = "#", style, type, cta, id, form, action }) => (
  <Link to={to}>
    <button id={id} className={style} type={type} form={form}>
      {cta}
    </button>
  </Link>
)

export default Navbutton
