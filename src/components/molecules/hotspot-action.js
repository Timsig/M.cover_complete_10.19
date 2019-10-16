import React from "react"
import { Link } from 'react-router-dom'

const HotspotAction = ({ left, top, width, height, action, id }) => {
  const stylePosition = {
    width: width,
    height: height,
    top: top,
    left: left,
    position: "absolute",
    // backgroundColor: "rgba(255,0,0,0.2)",
    cursor: "pointer",
  }

  return (
    
      <div className="hotspot" style={stylePosition} onClick={action} id={id}/>
   
  )
}

export default HotspotAction
