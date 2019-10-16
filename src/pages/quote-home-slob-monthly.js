import React from "react"
import Header from "../components/header"
import Hotspot from "../components/molecules/hotspot"

const quoteHomeSlobM = () => (
  <React.Fragment>
    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1571210202/m.cover_complete/Home_SLOB_-_Monthly_price.jpg" />
    <Hotspot left={67} top={484} width={188} height={29} dest="/quote-home-slob-annual" />
    <Hotspot left={16} top={6419} width={288} height={44} dest="/the-end" />
  </React.Fragment>
)
export default quoteHomeSlobM