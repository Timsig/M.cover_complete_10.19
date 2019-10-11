import React from "react"
import { Redirect } from "react-router-dom"
import Headertext from "../components/header_text"
import CarCard from "../components/car-card"
import DriverCard from "../components/driver-card"
import HotspotAction from "../components/molecules/hotspot-action"
import Footer from "../components/footer"
import Navbutton from "../components/molecules/navbutton"

class builder extends React.Component {

  constructor(props) {
    super(props)
    this.carEntered = this.carEntered.bind(this)
    this.retrieveCar = this.retrieveCar.bind(this)

    //Keep track of car to be entered
    
    this.state={
      currentCar: this.props.currentCar,
      carEntered: false,
      redirect: false
    }

  }

  //Swap car reg field to filled
  carEntered() {
    alert("car entered");
    this.setState({
      carEntered: true
    })
  }

  retrieveCar() {
    alert("retrieved car");
    this.setState({
      redirect: true
    })
  }

  render() {

    if (this.state.redirect){
      return <Redirect to="/car-questions" />
    }
    let left = this.state.carEntered ? 166 : 16
    let theAction = this.state.carEntered ? this.retrieveCar : this.carEntered
    
    //Logic to determine which card to display
    let theCard
    if(this.state.currentCar === "car1") {
      theCard = this.state.carEntered ? "https://res.cloudinary.com/lwcqviihu/image/upload/v1570458983/m.cover_complete/add_car1b.png" : "https://res.cloudinary.com/lwcqviihu/image/upload/v1570458824/m.cover_complete/add_car1.png"
    }else{
      theCard = this.state.carEntered ? "https://res.cloudinary.com/lwcqviihu/image/upload/v1570459091/m.cover_complete/add_car2b.png" : "https://res.cloudinary.com/lwcqviihu/image/upload/v1570459052/m.cover_complete/add_car2.png"
    }
    return(
      <React.Fragment>
        <Headertext headline="Your cars and drivers" />
        <div className="builder-wrapper">
          <h2>Cars</h2>
          {Object.keys(this.props.cars).map((keyName, i) => (
            <CarCard key={keyName} car={this.props.cars[keyName]}/>
          ))}
          <div className="add-car">
            <img src={theCard} />
            <HotspotAction left={left} top={75} width={121} height={40} action={theAction} />
          </div>
          <h2>Drivers</h2>
          {this.props.drivers.map((key, driver) => (
            <DriverCard key={key} driver={this.props.drivers[driver]} />
            
          ))}
          <Footer>
            <div className="navrow">
              <Navbutton style="primary" to="/quote" cta="Next >" />
            </div>

          </Footer>
        </div>
        
      </React.Fragment>
    )
  }
}

export default builder;