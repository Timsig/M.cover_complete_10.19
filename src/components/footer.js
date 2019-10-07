import React from "react"

const Footer = ({ children, bg = "#eee", addcar }) => (
  <footer onClick={addcar} style={{ backgroundColor: bg }}>
    {children}
  </footer>
)

export default Footer

