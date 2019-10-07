import React, { Component } from "react"
import AnimateHeight from "react-animate-height"
import Qselect from "./q_select"
// const Qrevealer = ({ question, id }) => (
//   <div className="qwrap">
//     <label htmlFor={id}>{question}</label>
//     <input id={id} type="text" />
//   </div>
// )

class Qrevealer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0,
      inputValue: "",
    }
    this.myRef = React.createRef()
  }

  updateInputValue = evt => {
    this.setState({
      inputValue: evt.target.value,
    })
  }

  open = () => {
    if (
      /^([a-zA-Z]){1}([0-9][0-9]|[0-9]|[a-zA-Z][0-9][a-zA-Z]|[a-zA-Z][0-9][0-9]|[a-zA-Z][0-9]){1}([ ]?)([0-9][a-zA-z][a-zA-z]){1}$/.test(
        this.state.inputValue
      )
    ) {
      this.setState({
        height: "auto",
        error: false,
      })
      window.scrollTo({
        left: 0,
        top: this.myRef.current.offsetTop,
        behavior: "smooth",
      })
    } else {
      this.setState({
        error: true,
        height: 0,
      })
    }
  }

  render() {
    const errorMessage = (
      <div className="errorMessage">Please enter a valid UK postcode</div>
    )
    return (
      <div className="qwrap qwrap-revealer" ref={this.myRef}>
        <label htmlFor={this.props.id}>{this.props.question}</label>
        <div className="inline-form-field">
          <input
            id={this.props.id}
            type="text"
            value={this.state.inputValue}
            onChange={this.updateInputValue}
            size="9"
          />
          <button onClick={this.open}>Submit</button>
        </div>
        {this.state.error ? errorMessage : ""}
        <AnimateHeight duration={500} height={this.state.height}>
          <Qselect
            id={this.props.selectId}
            question={this.props.selectQ}
            options={this.props.selectOptions}
          />
        </AnimateHeight>
      </div>
    )
  }
}

export default Qrevealer
