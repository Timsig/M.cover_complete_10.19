import React from "react"
import Header from "../components/header"
import Hotspot from "../components/molecules/hotspot"

const quoteHomeSlob = () => (
  <React.Fragment>
    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1571141107/m.cover_complete/Home_SLOB_-_No_product_selection.jpg" />
    <Hotspot left={35} top={1050} width={116} height={44} dest="/quote-home-slob-annual" />
  </React.Fragment>
)
export default quoteHomeSlob