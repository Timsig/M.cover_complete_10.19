import React from "react"
import Footer from "../components/footer"
import Navbutton from "../components/molecules/navbutton"

class XXXXXXXXXX extends React.Component {

constructor(props) {
  super(props)
}

render() {
  return(
    <React.Fragment>
    <h1>This is where you add home items</h1>
      <Footer>
        <div className="navrow">
          <Navbutton type="primary" to="/quote-page" cta="Get quote >" />
        </div>
        <div className="saverow">

        </div>
      </Footer>
    </React.Fragment>
  )
}

}

export default XXXXXXXXXX


