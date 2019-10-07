import React, { Component } from "react";

class Qselectclass extends Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef()   // Create a ref object 
  }

  componentDidMount() {
    this.myRef.current.scrollTo(0, 0);
  }

  render () {
    return (
      <div className="qwrap qwrap-select" ref={this.myRef}>
        <label htmlFor={this.props.id}>{this.props.question}</label>
        <select id={this.props.id}>
          <option value="" disabled>
            -- Please select one --
          </option>
          {this.props.options.map(option => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
}

export default Qselectclass;