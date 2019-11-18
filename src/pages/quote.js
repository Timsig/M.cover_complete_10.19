import React from "react"
import Headertext from "../components/header_text"
import Navbutton from "../components/molecules/navbutton"

const quote = () => (
  <React.Fragment>
    <Headertext headline="The facilitator will take you to the quote page" />
    <Navbutton style="primary" to="/about-your-home" cta="Proceed to home" />
  </React.Fragment>
)
  
export default quote