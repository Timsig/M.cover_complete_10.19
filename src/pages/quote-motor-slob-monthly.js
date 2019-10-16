import React from "react"
import Header from "../components/header"
import Hotspot from "../components/molecules/hotspot"

const quoteMotorSlobM = () => (
  <React.Fragment>
    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1571210205/m.cover_complete/Single_car_SLOB_-_Monthly_price.jpg" />
    <Hotspot left={66} top={484} width={188} height={29} dest="/quote-motor-slob" />
    <Hotspot left={16} top={6419} width={288} height={44} dest="/the-end" />
  </React.Fragment>
)
export default quoteMotorSlobM