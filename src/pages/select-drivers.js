import React from "react"
import HeaderText from "../components/header_text"
import Qcheckbox from "../components/q_checkbox"

class selectDrivers extends React.Component {
  constructor(props) {
    super(props)
    console.log("props:", this.props)
    
  //Check if there are any drivers yet
    const drivers = []
    if (this.props.drivers.length > 0) {
      drivers.push(this.props.drivers)
    }else{
      drivers.push(this.props.policyHolder)
    }
    
    this.state = {
      drivers: drivers
    }
    
  }

  render() {
    return(
      <React.Fragment>
        <HeaderText headline={"Who will drive      " + this.props.car.reg + "?"} />
        <main>
          <div className="questions-wrapper">
        <Qcheckbox id="drivers" question="Please select who will drive this car from the list" options={this.state.drivers} />
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default selectDrivers