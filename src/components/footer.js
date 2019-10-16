import React from "react"

const Footer = ({ children, bg = "none", form }) => (
  <footer style={{ backgroundColor: bg }} form={form}>
    {children}
  </footer>
)

export default Footer

