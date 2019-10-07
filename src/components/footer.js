import React from "react"

const Footer = ({ children, bg = "#eee", type, form }) => (
  <footer style={{ backgroundColor: bg }} type={type} form={form}>
    {children}
  </footer>
)

export default Footer

