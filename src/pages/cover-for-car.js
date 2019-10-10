import React from "react"
import Headertext from "../components/header_text"

import Qprepop from "../components/q_prepop"
import Qradiolistrevealer from "../components/q_radiolist-revealer"
import Qselect from "../components/q_select"
 
class coverForCar extends React.Component {
  constructor(props){
    super(props)
    this.setMainDriver = this.setMainDriver.bind(this)

    this.state = {
      mainDriver: ""
    }
  }

  setMainDriver(event) {
    alert("setting main: " + event.target.value)
  }


  render() {
    let availableDrivers = []
    if(this.props.car.drivers.length === 1) {
      availableDrivers.push(...this.props.car.drivers)
      this.setMainDriver()
    }else{
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
            {availableDrivers.length > 1 ?
              <Qradiolistrevealer id="ncdHolder" options={this.props.car.drivers} question="Who will earn no claim discount on this car?"/> : null}
              <Qselect question="What will_____use the car for?" options={["social", "driving", "rallying"]} />
          </div>
        </main>
        
      </React.Fragment>

    )
  }
}

export default coverForCar