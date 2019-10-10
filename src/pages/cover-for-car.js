import React from "react"
import Headertext from "../components/header_text"

import Qprepop from "../components/q_prepop"
import Qradiolistrevealer from "../components/q_radiolist-revealer"
import Qselect from "../components/q_select"
 
class coverForCar extends React.Component {
  constructor(props){
    super(props)
    this.setMainDriver = this.setMainDriver.bind(this)
    this.setNcdHolder = this.setNcdHolder.bind(this)

    let mainDriver = this.props.car.drivers.length === 1 ? this.props.car.drivers[0] : ""
    let ncdHolder = this.props.car.drivers.length === 1 ? this.props.car.drivers[0] : ""
    this.state = {
      mainDriver: mainDriver,
      ncdHolder: ncdHolder
    } 
  }

  setMainDriver(event) {  
      this.setState({
        mainDriver: event.target.value
      })    
  }

  setNcdHolder(name) {
    this.setState({
      ncdHolder: name
    })
  }


  render() {
    let availableDrivers = []
    if (this.props.car.drivers.length === 1) {
      availableDrivers.push(...this.props.car.drivers)
    } else {
      availableDrivers.push("--Please select--")
      availableDrivers.push(...this.props.car.drivers)
    }
    return(
      <React.Fragment>
        <Headertext headline={"Cover for " + this.props.car.reg} />
        <main>
          <div className="questions-wrapper">
            <section className="prepop-questions">
              <Qprepop id="mainDriver" textafter="is the main driver of this car" options={availableDrivers} onChange={this.setMainDriver}/>
            </section>

            {/* The conditionally rendered part */}
            {availableDrivers.length > 1 ?
              <Qradiolistrevealer id="ncdHolder" options={this.props.car.drivers} question="Who will earn no claim discount on this car?" setHolder={this.setNcdHolder} /> : null}
              <Qselect question={"What will " + this.state.mainDriver + " use the car for?"} options={["social", "driving", "rallying"]} />
          </div>
        </main>
        
      </React.Fragment>

    )
  }
}

export default coverForCar