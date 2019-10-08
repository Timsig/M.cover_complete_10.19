import React from "react"
import Headertext from "../components/header_text"
import CarCard from "../components/car-card"

class builder extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    return(
      <React.Fragment>
        <Headertext headline="Your cars and drivers" />
        <div className="builder-wrapper">
          {Object.keys(this.props.cars).map((keyName, i) => (
            <CarCard key={keyName} car={this.props.cars[keyName]}/>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default builder;