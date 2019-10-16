import React from "react"
import Header from "../components/header"
import Hotspot from "../components/molecules/hotspot"

const quoteHomeSlobA = () => (
  <React.Fragment>
    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1571210202/m.cover_complete/Home_SLOB_-_Annual_price.jpg" />
    <Hotspot left={67} top={346} width={188} height={29} dest="/quote-home-slob-monthly" />
    <Hotspot left={18} top={4593} width={288} height={44} dest="/the-end" />
  </React.Fragment>
)
export default quoteHomeSlobA