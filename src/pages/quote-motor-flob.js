import React from "react"
import Header from "../components/header"
import Hotspot from "../components/molecules/hotspot"

const quoteMotorFlob = () => (
  <React.Fragment>
    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1571141105/m.cover_complete/Multicar_FLOB_-_Annual_price.jpg" />
    <Hotspot left={65} top={357} width={188} height={29} dest="/quote-motor-flob-monthly" />
    <Hotspot left={16} top={8584} width={288} height={44} dest="/about-your-home" />
  </React.Fragment>
)
export default quoteMotorFlob