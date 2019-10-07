import React from "react";
import { Helmet } from "react-helmet"
import ScrollToTop from './components/scroll-to-top'
import AboutYou from './pages/about-you'
import MoreAboutYou from "./pages/more-about-you"
import JourneySelector from "./pages/journey-selector"
import './styles/global-styles.css'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.addDriver=this.addDriver.bind(this);

    this.state = {
      drivers: []
    }
  }

  addDriver(newDriver) {
    console.log("clicked")
    const drivers = this.state.drivers;
    drivers.push(newDriver);
    this.setState ({
      drivers: drivers
    })
  }

  render() {
    return (
      <div className="container">
      <Helmet>
        <title>Prototypical</title>
        <link href="https://fonts.googleapis.com/css?family=Muli:300,400,600,700&display=swap" rel="stylesheet"></link>
      </Helmet>
        <Router>
          <ScrollToTop >
            <Route 
              exact path="/" 
              render={() => (<AboutYou addDriver={this.addDriver} />)} 
            />
            <Route path="/more-about-you" component={MoreAboutYou} />
          
            <Route path="/journey-selector" component={JourneySelector} />
          </ScrollToTop>
        </ Router>
      </div>
    )
  }
}

export default Main;
