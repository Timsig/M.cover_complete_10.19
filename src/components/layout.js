/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import Header from "./header"
import "../styles/global-styles.css"

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.addCar = this.addCar.bind(this)
    this.addDriver = this.addDriver.bind(this)
    this.reset = this.reset.bind(this)
    this.addCarAssigned = this.addCarAssigned.bind(this)

    this.state = {
      cars: 0,
      drivers: 0,
      carsAssigned: 0,
      car1Assigned: false,
      car2Assigned: false,
    }
  }

  addCarAssigned(event) {
    console.log("car assigned click")
    console.log(event.target.id)
    const newAssigned = parseInt(this.state.carsAssigned, 10) + 1
    const theCarAssigned=event.target.id==="car1" ? "car1Assigned" : "car2Assigned"
    console.log("thecarassigned", theCarAssigned)
    this.setState(
      {
        carsAssigned: newAssigned,
        [theCarAssigned]: true,
      },
      () => {
        localStorage.setItem("carsAssigned", this.state.carsAssigned)
        localStorage.setItem(theCarAssigned, true)
      }
    )
  }

  addCar() {
    const newCars = parseInt(this.state.cars, 10) + 1
    this.setState(
      {
        cars: newCars,
      },
      () => {
        localStorage.setItem("cars", this.state.cars)
      }
    )
  }

  addDriver() {
    const newDrivers = parseInt(this.state.drivers, 10) + 1
    this.setState(
      {
        drivers: newDrivers,
      },
      () => {
        localStorage.setItem("drivers", this.state.drivers)
      }
    )
  }

  reset() {
    this.setState({
      cars: 0,
      drivers: 0,
    })
  }

  componentDidMount() {
    const cars = localStorage.getItem("cars") || 0
    const drivers = localStorage.getItem("drivers") || 0
    const carsAssigned = localStorage.getItem("carsAssigned") || 0
    const car1Assigned = localStorage.getItem("car1Assigned") || false
    const car2Assigned = localStorage.getItem("car2Assigned") || false

    this.setState({
      cars: cars,
      drivers: drivers,
      carsAssigned: carsAssigned,
      car1Assigned: car1Assigned,
      car2Assigned: car2Assigned,
    })
  }

  render() {
    const backGround = this.props.bg || "#eee"
    const childrenwProps = React.Children.map(this.props.children, child => {
      if (child.props.id == "addCarButton") {
        return React.cloneElement(child, {
          action: this.addCar,
          cars: this.state.cars,
          drivers: this.state.drivers,
        })
      } else if (child.props.id == "addDriverButton") {
        return React.cloneElement(child, {
          action: this.addDriver,
          cars: this.state.cars,
          drivers: this.state.drivers,
        })
      } else if (child.props.className == "carAssignedButton") {
        return React.cloneElement(child, {
          action: this.addCarAssigned,
          assigned: this.state.carsAssigned,
        })
      } else {
        return React.cloneElement(child)
      }
    })
    return (
      <div className="container" style={{ backgroundColor: backGround }}>
        <Header image={this.props.headerImage} />
        <main>
          <h1>{this.props.header}</h1>
          <div className="questions-wrapper">{childrenwProps}</div>
        </main>
      </div>
    )
  }
}

export default Layout
