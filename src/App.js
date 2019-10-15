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
import CoverForCar from "./pages/cover-for-car"
import Quote from "./pages/quote"
import PhDriverQues from "./pages/ph-driver-questions"
import AdditionalDriverQues from "./pages/additional-driver-questions"
import AboutYourHome from "./pages/about-your-home"
import HomeItems from "./pages/home-items"
import AddItem from "./pages/add-item"


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.addPolicyHolder=this.addPolicyHolder.bind(this)
    this.addPhAsDriver = this.addPhAsDriver.bind(this)
    this.addDriver = this.addDriver.bind(this)
    this.addCar = this.addCar.bind(this)
    this.driversOnCar = this.driversOnCar.bind(this)
    this.setFirstLOB = this.setFirstLOB.bind(this)
    this.addItem = this.addItem.bind(this)
    this.lineComplete = this.lineComplete.bind(this)

    this.state = {
      policyHolder: "",
      policyHolderAsDriver: false,
      firstLOB: "",
      motorComplete: false,
      currentCar: "car1",
      cars: {
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
      drivers: [],

      homeComplete: false,
      items: []
    }
  }

  //Once about you is complete
  addPolicyHolder(name) {
    let drivers = [...this.state.drivers]    
    this.setState ({
      policyHolder: name,
      
    })
  }

  setFirstLOB(line){
    this.setState({
      firstLOB: line
    })
  }

  //Once policy holder driving history complete
  addPhAsDriver() {
    let car = this.state[this.state.currentCar]
    let {drivers} = this.state
    let ph = this.state.policyHolder
    if(car.drivers.indexOf(ph) < 0) {
      car.drivers.unshift(ph)
    }
    if (drivers.indexOf(ph) < 0) {
      drivers.unshift(ph)
    }
    this.setState({
      [this.state.currentCar]: car,
      drivers: drivers,
      policyHolderAsDriver: true
    })
  }

  //Adds to car and also to driver list
  addDriver(name) {
    const {currentCar} = this.state
    let car = this.state[currentCar]
    car.drivers.push(name)
    let {drivers} = this.state
    drivers.push(name)
    this.setState({
      [currentCar]: car,
      drivers
    })
  }

// This updates currentCar in state
  addCar(newCar) {
    this.setState({
      [this.state.currentCar]: newCar
    })

    let theCars = {...this.state.cars}
    theCars[this.state.currentCar] = newCar
    this.setState({
      cars: theCars,
      currentCar: "car2"
    })
    //Make sure policyholder appears at top of driver list
    let newDrivers = [...new Set([...this.state.drivers, ...newCar.drivers])]
    if(newDrivers.length > 1) {
      let position = newDrivers.indexOf(this.state.mainDriver)
      newDrivers.splice(position, 1)
      newDrivers.unshift(this.state.mainDriver)
    }
  }

  //Add the checked drivers to the car
  driversOnCar(drivers) {
    //Check if policyholder driving details need to be captured
    if(drivers.indexOf(this.state.policyHolder) < 0) {
      return
    }
    let theCar = {...this.state[this.state.currentCar]}
    theCar.drivers.length = 0
    theCar.drivers.push(...drivers)
    this.setState({
      [this.state.currentCar]: theCar
    }) 
  }

  //Add spec item to home policy
  addItem(item){
    const items  = [...this.state.items]
    items.push(item)
    this.setState({
      items
    })
  }

  //Mark one LOB as complete
  lineComplete(line) {
    this.setState({
      [line]: true
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
            <Route
              path="/journey-selector"
              render={() => (<JourneySelector setFirst={this.setFirstLOB} />
              )}
            />
            <Route
              path="/builder-page"
              render={() => (<BuilderPage cars={this.state.cars}
                  currentCar={this.state.currentCar} 
                  drivers={this.state.drivers} 
                  policyHolder={this.state.policyHolder}
                  lineComplete={this.lineComplete} 
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
                policyHolderAsDriver={this.state.policyHolderAsDriver}
                driversOnCar={this.driversOnCar} />
              )}
            />
            <Route
              path="/ph-driver-questions"
              render={() => (<PhDriverQues action={this.addPhAsDriver}/>
              )}
            />
            <Route
              path="/additional-driver-questions"
              render={() => (<AdditionalDriverQues
                addDriver={this.addDriver} />
              )}
            />
            <Route
              path="/cover-for-car"
              render={() => (<CoverForCar currentCar={this.state.currentCar}
                car={this.state[this.state.currentCar]}
                addTheCar={this.addCar} />
              )}
            />
            <Route
              path="/quote"
              render={() => (<Quote />
              )}
            /> 
            <Route path="/about-your-home" component={AboutYourHome} /> 
            <Route
              path="/home-items"
              render={() => (<HomeItems items={this.state.items} lineComplete={this.lineComplete} />
              )}
            /> 
            <Route
              path="/add-item"
              render={() => (<AddItem addItem={this.addItem} />
              )}
            />       
          </ScrollToTop>
        </ Router>
      </div>
    )
  }
}

export default Main;
