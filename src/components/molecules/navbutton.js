import { Link } from "react-router-dom"
import React from "react"

const Navbutton = ({ to = "#", rank, cta, id, type, form }) => (
  <Link to={to}>
    <button id={id} className={rank} type={type} form={form}>
      {cta}
    </button>
  </Link>
)

export default Navbutton
