import React from "react"
import { Redirect } from "react-router-dom"
import Headertext from "../components/header_text"
import CarCard from "../components/car-card"
import DriverCard from "../components/driver-card"
import HotspotAction from "../components/molecules/hotspot-action"
import Footer from "../components/footer"
import Actionbutton from "../components/molecules/actionbutton"
import Navbutton from "../components/molecules/navbutton"

class builder extends React.Component {

  constructor(props) {
    super(props)
    this.carEntered = this.carEntered.bind(this)
    this.retrieveCar = this.retrieveCar.bind(this)
    this.motorComplete = this.motorComplete.bind(this)

    //Keep track of car to be entered
    
    this.state={
      currentCar: this.props.currentCar,
      carEntered: false,
      redirect: false,
      nextDest: "",
      error: false
    }

  }

  //Swap car reg field to filled
  carEntered() {
    this.setState({
      carEntered: true
    })
  }

  retrieveCar() {
    this.setState({
      nextDest: "/car-questions",
      redirect: true
    })
  }

  //To quote page and update motor as complete
  motorComplete() {
    if (Object.keys(this.props.cars).length < 1) {
      this.setState({
        error: true
      })
      return
    }
    this.props.lineComplete("motorComplete")
    let nextDest = this.props.firstLOB === "motor" ? "/quote-motor-flob" : "/quote-motor-slob"
    window.location.assign('https://sjjj3r.axshare.com/car_flob_-_with_br_table.html')
    this.setState({
      nextDest: "/quote",
      redirect: true
    })
  }

  render() {

    if (this.state.redirect){
      return <Redirect to={this.state.nextDest} />
    }
    let left = this.state.carEntered ? 160 : 18
    let theAction = this.state.carEntered ? this.retrieveCar : this.carEntered
    
    //Logic to determine which card to display
    let theCard
    if(this.state.currentCar === "car1") {
      theCard = this.state.carEntered ? "https://res.cloudinary.com/lwcqviihu/image/upload/v1573818327/m.cover_hifi/Add-car-ABC.png" : "https://res.cloudinary.com/lwcqviihu/image/upload/v1573818327/m.cover_hifi/Add-car-blank.png"
    }else{
      theCard = this.state.carEntered ? "https://res.cloudinary.com/lwcqviihu/image/upload/v1573818327/m.cover_hifi/Add-car-DEF.png" : "https://res.cloudinary.com/lwcqviihu/image/upload/v1573818327/m.cover_hifi/Add-car-blank.png"
    }
    return(
      <React.Fragment>
        <Headertext headline="Your cars and drivers" />
        <div className="builder-wrapper">
          <h2>Cars</h2>
          <div className="cars">
            {Object.keys(this.props.cars).map((keyName, i) => (
              <CarCard key={keyName} car={this.props.cars[keyName]}/>
            ))}
            <div className="add-car">
              <img src={theCard} />
              <HotspotAction left={left} top={75} width={121} height={40} action={theAction} />
            </div>
          </div>
          {this.props.drivers.length > 0 && <h2>Drivers</h2>}
          {this.props.drivers.map((key, driver) => (
            <DriverCard key={key} driver={this.props.drivers[driver]} />
            
          ))}
        </div>
          <Footer>
          {this.state.error ? <div className="errorMessage">You must add at least one car to get a quote.</div> : ""}
          <div className="navrow" style={{ marginTop: "32px" }}>
              <Actionbutton rank="primary" action={this.motorComplete} cta="Get quote >" />
              <Navbutton rank="secondary" cta="< Back" />
            <Navbutton rank="secondary" cta="Save for later" />
            </div>
          </Footer>
        
        
      </React.Fragment>
    )
  }
}

export default builder;