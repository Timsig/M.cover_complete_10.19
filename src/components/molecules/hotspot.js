import React from "react"
import { Link } from 'react-router-dom'

const Hotspot = ({ left, top, width, height, dest }) => {
  const stylePosition = {
    width: width,
    height: height,
    top: top,
    left: left,
    position: "absolute",
    // backgroundColor: "rgba(255,0,0,0.2)",
  }

  return (
    <Link to={dest}>
      <div className="hotspot" style={stylePosition} />
    </Link>
  )
}

export default Hotspot
