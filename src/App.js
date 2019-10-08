import React from "react";
import './styles/global-styles.css'
import { Helmet } from "react-helmet"
import ScrollToTop from './components/scroll-to-top'
import AboutYou from './pages/about-you'
import MoreAboutYou from "./pages/more-about-you"
import JourneySelector from "./pages/journey-selector"
import BuilderPage from "./pages/builder-page"


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.addPolicyHolder=this.addPolicyHolder.bind(this);
    this.addCar = this.addCar.bind(this);

    this.state = {
      policyHolder: "",
      motorComplete: false,
      currentCar: "",
      cars: {car1: {
                      image:"https://res.cloudinary.com/lwcqviihu/image/upload/v1570525767/m.cover_complete/car-card_car1Head.png",
                      drivers: ["Tombo Baggins"]
                    }  
      },
      car1: {
        image: "",
        entered: false,
        drivers: []
      },
      car2: {
        image: "",
        entered: false,
        drivers: []
      },
      drivers: ["Tombo Bagggins"],

      homeComplete: false
    }
  }

  addPolicyHolder(name) {
    this.setState ({
      policyHolder: name
    })
  }

  addCar(car) {

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
                  drivers={this.state.drivers} 
                  policyHolder={this.state.policyHolder} 
                  addCar={this.addcar}/>
              )}
            />
          </ScrollToTop>
        </ Router>
      </div>
    )
  }
}

export default Main;
