import React from "react"
import { Link, Redirect } from "react-router-dom"
import HeaderText from "../components/header_text"
import Qcheckdrivers from "../components/q_checkdrivers"
import Footer from "../components/footer"
import Submitbutton from "../components/molecules/submitbutton"
import Navbutton from "../components/molecules/navbutton"

class selectDrivers extends React.Component {
  constructor(props) {
    super(props)
    this.selectDrivers = this.selectDrivers.bind(this)
    this.handleAddDriver = this.handleAddDriver.bind(this)
    
  //Check if there are any drivers yet, otherwise just display policy holder
  let drivers = [...this.props.drivers]
  if (!this.props.policyHolderAsDriver) {
    drivers.unshift(this.props.policyHolder)
  } 
    this.state = {
      drivers: drivers,
      redirect: false,
      nextDest: "",
      error: false
    }   
  }

  handleAddDriver(event) {
    event.preventDefault()
    //Get nodelist from the form
    const drivers  = [this.form.drivers]
    
    //Convert to array
    const checkboxArray = [...drivers]
    
    //Extract juust the checkked ones
    const checkedBoxes = checkboxArray.filter(input => input.checked)
    //Get the values of the checked ones
    const checkedBoxValues = checkedBoxes.map(input => input.value)
    this.props.driversOnCar(checkedBoxValues)
    this.setState({
        nextDest: "/additional-driver-questions",
        redirect: true
    })
  }

  selectDrivers(event) {
    event.preventDefault()

    let formData = new FormData(event.target)
    let drivers = formData.getAll("drivers")
    console.log(drivers)
    // ["cat", "ferret"]
    //Get nodelist from the form
    // const drivers = [this.form.drivers]
    // // const drivers = this.form.drivers
    // console.log(drivers)
    // console.log("Drivers length: ", drivers.length)
    // //Convert to array
    // // const checkboxArray = [ ...drivers ]
    // // const checkboxArray = Array.from(drivers)
    // let checkboxArray = []
    // for (var item of drivers) {
    //   checkboxArray.push(item);
    // }
    // console.log(checkboxArray)
    // //Extract juust the checked ones
    // const checkedBoxes = checkboxArray.filter(input => input.checked)
    // //Get the values of the checked ones
    // const checkedBoxValues = checkedBoxes.map(input => input.value)
    this.props.driversOnCar(drivers)

    //Check at least one driver added
    if(drivers.length < 1) {
      this.setState({
        error: true,
      })
      return
    }else{
      this.setState({
        error: false,
      })
    }
    // Work out whether policy holder driving history needs to be asked
    if (drivers.includes(this.props.policyHolder) && !this.props.policyHolderAsDriver) {
      this.setState({
        nextDest: "/ph-driver-questions"
      })
    } else {
      this.setState({
        nextDest: "/cover-for-car"
      })
    }
    this.setState({
      redirect: true
    })
  }

  render() {
    
    if(this.state.redirect) {
      return <Redirect to={this.state.nextDest} />
    }
    return(
      <React.Fragment>
        <HeaderText headline={"Who will drive      " + this.props.car.reg + "?"} />
        <main>
          <div className="questions-wrapper">
            <form id="driverSelector" onSubmit={this.selectDrivers} ref={form => this.form = form}>
             <Qcheckdrivers id="drivers" question="Please select who will drive this car from the list" options={this.state.drivers} theDrivers={this.props.car.drivers} />
              {/* <input className="button-link" name="action" value="add-driver" type="submit" form="driverSelector" >+ Add another driver</input> */}
              <button className="button-link" onClick={this.handleAddDriver}>+ Add another driver</button>
            </form>
          </div>
        </main>
        <Footer>
          {this.state.error ? <div className="errorMessage">You must select at least one driver</div> : ""}
          <div className="navrow" style={{marginTop: "32px"}}>
            <Submitbutton style="primary" cta="Next >" name="action" value="choose-drivers" form="driverSelector" />
            <Navbutton to="/car-questions" style="secondary" cta="< Back" />
            <Navbutton style="secondary" cta="Save for later" />
          </div>
        </Footer>
          
        
      </React.Fragment>
    )
  }
}

export default selectDrivers