import React from "react"
import { Redirect } from "react-router-dom"
import Headertext from "../components/header_text"
import Qprepop from "../components/q_prepop"
import Qradiolistrevealer from "../components/q_radiolist-revealer"
import Qselect from "../components/q_select"
import Footer from "../components/footer"
import Actionbutton from "../components/molecules/actionbutton"
import Navbutton from "../components/molecules/navbutton"
 
class coverForCar extends React.Component {
  constructor(props){
    super(props)
    this.setMainDriver = this.setMainDriver.bind(this)
    this.setNcdHolder = this.setNcdHolder.bind(this)
    this.addThisCar = this.addThisCar.bind(this)

    let mainDriver = this.props.car.drivers.length === 1 ? this.props.car.drivers[0] : ""
    let ncdHolder = this.props.car.drivers.length === 1 ? this.props.car.drivers[0] : ""
    this.state = {
      mainDriver: mainDriver,
      ncdHolder: ncdHolder,
      redirect: false,
      error: false
    } 
  }

  setMainDriver(event) {  
      this.setState({
        mainDriver: event.target.value,
        error: false
      })    
  }

  setNcdHolder(name) {
    this.setState({
      ncdHolder: name
    })
  }

  addThisCar() {
    console.log(this.props.car)
    let carToAdd = {...this.props.car}
    if(!this.state.mainDriver) {
      this.setState({
        error: true
      })
      return
    }
    carToAdd.mainDriver = this.state.mainDriver
    carToAdd.ncdHolder =  this.state.ncdHolder
    carToAdd.entered = true
    if(carToAdd.drivers.length > 1){
      let position = carToAdd.drivers.indexOf(carToAdd.mainDriver)
      carToAdd.drivers.splice(position, 1)
      carToAdd.drivers.unshift(carToAdd.mainDriver)
    }
    this.props.addTheCar(carToAdd)
    this.setState({
      redirect: true
    })
  }


  render() {
    //Ask or assume main driver?
    let availableDrivers = []
    if (this.props.car.drivers.length === 1) {
      availableDrivers.push(...this.props.car.drivers)
    } else {
      availableDrivers.push("--Please select--")
      availableDrivers.push(...this.props.car.drivers)
    }

    //Iterate over drivers for useage question
    const carUse = this.props.car.drivers.map((driver, key) => <Qselect key={key} question={"How will " + driver + " use this car?"} options={["Social, domestic & pleasure",
      "Social, domestic & pleasure ",
      " - inc. commuting",
      "Business use, exc.",
      " - commercial travelling",
      "Business use, ",
      " - inc.commercial travelling"]} /> )
    

    //order drivers for ncd holder based assumptions
    let optionList =[]
    if(this.state.ncdHolder) {
      let position = this.props.car.drivers.indexOf(this.state.ncdHolder)
      optionList = [...this.props.car.drivers]
      optionList.splice(position, 1)
      optionList.unshift(this.state.ncdHolder)
    } 

    if(this.state.redirect) {
      return<Redirect to="/builder-page" />
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
              <Qradiolistrevealer id="ncdHolder" options={this.props.car.drivers} question="Who will earn no claim discount on this car?" setHolder={this.setNcdHolder} /> : <Qselect question={"How many years no claim discount does " + this.state.mainDriver + " have to use on this car?"} options={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9 or more"]} />}
            {carUse} 
            <section className="prepop-questions">
              <h3>Please check the following statements:</h3>
              <Qprepop
                id="registeredKeeper"
                textbefore={this.state.ncdHolder || "This driver"}
                options={["is", "is not"]}
                textafter="the registered keeper of this car"
              />
              <Qprepop
                id="legalOwner"
                textbefore={this.state.ncdHolder || "This driver"}
                options={["is", "is not"]}
                textafter="is the legal owner of this car"
              />
              <Qprepop
                id="ncdEarnt"
                textbefore={(this.state.ncdHolder || "This driver") + " earnt this no claim discount"}
                options={["Driving this or another car in the UK",
                  "Driving this or another car overseas"]}
              />
            </section> 
          </div>
        </main>
        <Footer>
          {this.state.error ? <div className="errorMessage">You need to select a main driver</div> : ""}
          <p>By clicking below, you confirm that the above statements are true.</p>
          <div className="navrow">
            <Actionbutton rank="primary" cta="Add this car" action={this.addThisCar} />
            <Navbutton to="/select-drivers" rank="secondary" cta="< Back" />
            <Navbutton rank="secondary" cta="Save for later" />
          </div>
        </Footer>

          
       
        
      </React.Fragment>

    )
  }
}

export default coverForCar