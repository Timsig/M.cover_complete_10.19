import React from "react";
import { Helmet } from "react-helmet"
import Test from './pages/testpage'
import Page2 from "./pages/page2"
// import ScrollToTop from './components/scroll-to-top'
import './styles/global-styles.css'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.updateColour=this.updateColour.bind(this);

    this.state = {
      colour: ""
    }
  }

  updateColour(colour) {
    console.log("clicked")
    this.setState ({
      colour: colour
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
          <Route 
            exact path="/" 
            render={() => (<Test updateColour={this.updateColour} />)} 
          />
          <Route path="/page2" component={Page2} />
        </ Router>
      </div>
    )
  }
}

export default Main;
