import React from "react"
import Header from "../components/header"
import Hotspot from "../components/molecules/hotspot"

const quoteHomeFlobA = () => (
  <React.Fragment>
    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1571210202/m.cover_complete/Home_FLOB_-_Annual_price.jpg" />
    <Hotspot left={67} top={346} width={188} height={29} dest="/quote-home-flob-monthly" />
    <Hotspot left={67} top={776} width={188} height={29} dest="/quote-home-flob-monthly" />
    <Hotspot left={16} top={4573} width={288} height={44} dest="/builder-page" />
  </React.Fragment>

)
export default quoteHomeFlobA