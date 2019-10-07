import React from "react"
import Header from "../components/header"
import Hotspot from "../components/molecules/hotspot"
import { Link } from "react-router-dom"

const JourneySelector = ()  => (
  <React.Fragment>
    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1570458150/m.cover_complete/Journey_selector.jpg" />
    <Hotspot left={35} top={602} width={250} height={50} dest="/your-cars-and-drivers" />
    <Hotspot left={35} top={961} width={250} height={50} dest="/about-your-home" />
  </React.Fragment >
)

export default JourneySelector