import React from "react";
import './styles/global-styles.css'
import { Helmet } from "react-helmet"
import ScrollToTop from './components/scroll-to-top'
import AboutYou from './pages/about-you'
import MoreAboutYou from "./pages/more-about-you"
import JourneySelector from "./pages/journey-selector"
import BuilderPage from "./pages/builder-page"
import CarQuestions from "./pages/car-questions"
import SelectDrivers from "./pages/select-drivers"
import AdditionalDriver from "./pages/additional-driver-questions"
import CoverForCar from "./pages/cover-for-car"


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.addPolicyHolder=this.addPolicyHolder.bind(this)
    this.addCar = this.addCar.bind(this)
    this.driversOnCar = this.driversOnCar.bind(this)

    this.state = {
      policyHolder: "Tim Signore",
      motorComplete: false,
      currentCar: "car2",
      cars: {car1: {
                      image:"https://res.cloudinary.com/lwcqviihu/image/upload/v1570525767/m.cover_complete/car-card_car1Head.png",
                      drivers: ["Tombo Baggins"]
                    }  
      },
      car1: {
        cardimage: "https://res.cloudinary.com/lwcqviihu/image/upload/v1570525767/m.cover_complete/car-card_car1Head.png",
        detailsimage: "",
        reg: "ABC 123",
        entered: false,
        drivers: [],
        mainDriver: "",
        ncdHolder: ""
      },
      car2: {
        cardimage: "https://res.cloudinary.com/lwcqviihu/image/upload/v1570525767/m.cover_complete/car-card_car2Head.png",
        detailsimage: "",
        reg: "DEF 456",
        entered: false,
        drivers: [],
        mainDriver: "",
        ncdHolder: ""
      },
      drivers: ["Tim Signore", "Martyn Warren", "Rob Callaghan"],

      homeComplete: false
    }
  }

  addPolicyHolder(name) {
    this.setState ({
      policyHolder: name
    })
  }

// This needs to update currentCar in state
  addCar(newCar) {
    this.setState({
      [this.state.currentCar]: newCar
    })
  }

  driversOnCar(drivers) {
    let theCar = {...this.state[this.state.currentCar]}
    theCar.drivers.length = 0
    theCar.drivers.push(...drivers)
    this.setState({
      theCar
    }) 
  }

  render() {
    return (
      <div className="container">
        <Router>
          <ScrollToTop>
            <Route 
              exact path="/" 
              render={() => (<AboutYou addPolicyHolder={this.addPolicyHolder} />)} 
            />
            <Route path="/more-about-you" component={MoreAboutYou} />
          
            <Route path="/journey-selector" component={JourneySelector} />
            <Route
              path="/builder-page"
              render={() => (<BuilderPage cars={this.state.cars}
                  currentCar={this.state.currentCar} 
                  drivers={this.state.drivers} 
                  policyHolder={this.state.policyHolder} 
                  />
              )}
            />
            <Route
              path="/car-questions"
              render={() => (<CarQuestions currentCar={this.state.currentCar} />
              )}
            />
            <Route
              path="/select-drivers"
              render={() => (<SelectDrivers currentCar={this.state.currentCar}
                car={this.state[this.state.currentCar]}
                drivers={this.state.drivers}
                policyHolder={this.state.policyHolder}
                driversOnCar={this.driversOnCar} />
              )}
            />
            <Route
              path="/cover-for-car"
              render={() => (<CoverForCar currentCar={this.state.currentCar}
                car={this.state[this.state.currentCar]}
                addTheCar={this.addCar} />
              )}
            />
          </ScrollToTop>
        </ Router>
      </div>
    )
  }
}

export default Main;
