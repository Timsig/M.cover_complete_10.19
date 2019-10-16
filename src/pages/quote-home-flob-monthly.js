import React from "react"
import Header from "../components/header"
import Hotspot from "../components/molecules/hotspot"

const quoteHomeFlobM = () => (
  <React.Fragment>
    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1571240250/m.cover_complete/Home_FLOB_-_Monthly_price.jpg" />
    <Hotspot left={67} top={356} width={188} height={29} dest="/quote-home-flob-annual" />
    <Hotspot left={67} top={832} width={188} height={29} dest="/quote-home-flob-annual" />
    <Hotspot left={18} top={4993} width={288} height={44} dest="/builder-page" />
  </React.Fragment>

)
export default quoteHomeFlobM