import React from "react"
import Headertext from "../components/header_text"
import Navbutton from "../components/molecules/navbutton"

const introPage = () => (
  <React.Fragment>
  <Headertext headline="Multicover" />
    <div className="builder-wrapper">
      <div className="questions-wrapper">
        <p>We’re simplifying insurance by combining our home and car policies into one. Less paperwork can only be a good thing, right?</p>
      
        <p>If you have your car and home insurance with us, we’ll make things simple by giving you one combined policy, with one renewal date. With that, you’ll benefit from our Defaqto Five Star rating and multicover savings.</p>
      
        <p>Just another reason why we’re Britain’s best-loved.</p>
        <Navbutton style="primary" to="/about-you" cta="Start a multicover quote >" />
      </div>
    </div>
  </React.Fragment>
)

export default introPage