import React from "react"
import Headertext from "../components/header_text"

const theEnd = () => (
  <React.Fragment>
    <Headertext headline="The facilitator will take you to the quote page" />
    <a href="https://guardian.co.uk" target="_blank" rel="noopener noreferrer">
      <button classs="primary">Go to Guardian</button>
    </a>
  </React.Fragment>
) 

export default theEnd