import React from "react"
import { Link, Redirect } from "react-router-dom"
import HeaderText from "../components/header_text"
import Qcheckdrivers from "../components/q_checkdrivers"
import Footer from "../components/footer"
import Submitbutton from "../components/molecules/submitbutton"

class selectDrivers extends React.Component {
  constructor(props) {
    super(props)
    this.selectDrivers = this.selectDrivers.bind(this)
    
    
  //Check if there are any drivers yet, otherwise just display policy holder
  let drivers = [...this.props.drivers]
  if (!this.props.policyHolderAsDriver) {
    drivers.push(this.props.policyHolder)
  } 
    this.state = {
      drivers: drivers,
      redirect: false,
      policyHolderQues: false
    }   
  }

  selectDrivers(event) {
    event.preventDefault()
    //Get nodelist from the form
    const { drivers } = this.form
    //Convert to array
    const checkboxArray = Array.prototype.slice.call(drivers)
    //Extract juust the checkked ones
    const checkedBoxes = checkboxArray.filter(input => input.checked)
    //Get the values of the checked ones
    const checkedBoxValues = checkedBoxes.map(input => input.value)
    this.props.driversOnCar(checkedBoxValues)

    //Work out whether policy holder driving history needs to be asked
    if (checkedBoxValues.indexOf(this.props.policyHolder) && !this.props.policyHolderAsDriver) {
      this.setState({
        policyHolderQues: true
      })
    }
    this.setState ({
      redirect: true
    })  
  }

  render() {
    
    if(this.state.redirect) {
      // let nextDest = this.props.policyHolderAsDriver ? "/cover-for-car" : "/ph-driver-questions"
      let nextDest = !this.props.policyHolderAsDriver && this.state.policyHolderQues ? "/ph-driver-questions" : "/cover-for-car"
      return <Redirect to={nextDest} />
    }
    return(
      <React.Fragment>
        <HeaderText headline={"Who will drive      " + this.props.car.reg + "?"} />
        <main>
          <div className="questions-wrapper">
            <form id="driverSelector" onSubmit={this.selectDrivers} ref={form => this.form = form}>
             <Qcheckdrivers id="drivers" question="Please select who will drive this car from the list" options={this.state.drivers} theDrivers={this.props.car.drivers} />
            </form>
            <Link to="/additional-driver-questions">
              <p className="link">+ Add another driver</p>
            </Link>
            <Footer>
              <div className="navrow">
                <Submitbutton style="primary" cta="Choose dem drivers" form="driverSelector" />
              </div>
            </Footer>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default selectDrivers