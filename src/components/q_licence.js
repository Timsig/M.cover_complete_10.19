import React from "react"

class Licence extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valid: false,
      success: false,
      inputValue: "",
    }
  }

  updateInputValue = evt => {
    this.setState(
      {
        inputValue: evt.target.value,
      },
      function() {
        if (this.state.inputValue.length >= 11) {
          this.setState({
            valid: true,
          })
        } else {
          this.setState({
            valid: false,
          })
        }
      }
    )
  }

  retrieve = evt => {
    if (this.state.valid) {
      this.setState({
        success: true,
      })
    }
  }

  render() {
    const successMessage = (
      <div className="successMessage">
        We have successfully retrieved your details
      </div>
    )

    const btnClass = this.state.valid
      ? "btn-block primary"
      : "btn-block disabled"

    return (
      <div className="qwrap licence" ref={this.myRef}>
        <label htmlFor={this.props.id}>{this.props.question}</label>
        <div className="inline-form-field">
          <span className="licenceno">BAGGI </span>
          <input
            id={this.props.id}
            type="text"
            value={this.state.inputValue}
            onChange={this.updateInputValue}
            size="11"
          />
        </div>
        <button className={btnClass} onClick={this.retrieve}>
          Retrieve details
        </button>
        <button className="btn-block ">I don't know the licence number</button>
        {this.state.success ? successMessage : ""}

        {/* {this.state.error ? errorMessage : ""} */}
      </div>
    )
  }
}

export default Licence
