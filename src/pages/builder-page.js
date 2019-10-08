import React from "react"
import Headertext from "../components/header_text"
import CarCard from "../components/car-card"
import DriverCard from "../components/driver-card"
import HotspotAction from "../components/molecules/hotspot-action"

class builder extends React.Component {

  constructor(props) {
    super(props)

    let currentCar = this.props.cars.length === 0 ? "car1" : "car2";
    this.state={
      currentCar: currentCar,
      carEntered: false
    }

  }
  carEntered() {
    alert("car entered")
  }

  render() {
    return(
      <React.Fragment>
        <Headertext headline="Your cars and drivers" />
        <div className="builder-wrapper">
          <h2>Cars</h2>
          {Object.keys(this.props.cars).map((keyName, i) => (
            <CarCard key={keyName} car={this.props.cars[keyName]}/>
          ))}
          <div className="add-car">
            <img src="https://res.cloudinary.com/lwcqviihu/image/upload/v1570458824/m.cover_complete/add_car1.png" />
            <HotspotAction left={16} top={75} width={121} height={40} action={this.carEntered} />
          </div>
          <h2>Drivers</h2>
          {this.props.drivers.map((key, driver) => (
            <DriverCard key={key} driver={this.props.drivers[driver]} />
            
          ))}
        </div>
        
      </React.Fragment>
    )
  }
}

export default builder;