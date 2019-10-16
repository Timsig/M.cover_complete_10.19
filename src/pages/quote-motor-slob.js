import React from "react"
import Header from "../components/header"
import Hotspot from "../components/molecules/hotspot"

const quoteMotorSlob = () => (
  <React.Fragment>
    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1571141107/m.cover_complete/Single_car_SLOB_-_Annual_price.jpg" />
    <Hotspot left={67} top={346} width={188} height={29} dest="/quote-motor-slob-monthly" />
    <Hotspot left={16} top={6195} width={288} height={44} dest="/the-end" />
  </React.Fragment>
)
export default quoteMotorSlob