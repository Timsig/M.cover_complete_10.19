import React from "react"

class Licence extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valid: false,
      invalid: false,
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
            invalid: false,
          })
        } else {
          this.setState({
            valid: false,
            success: false,
          })
        }
      }
    )
  }

  retrieve = evt => {
    evt.preventDefault()
    if (this.state.valid) {
      this.setState({
        success: true,
      })
    }else{
      this.setState({
        invalid: true,
      })
    }
  }

  render() {
    const successMessage = (
      <div className="successMessage">
        We have successfully retrieved your details
      </div>
    )

    const failMessage = (
      <div className="errorMessage">
        You need to enter 11 characters to complete the licence number
      </div>
    )

    const btnClass = this.state.valid
      ? "primary"
      : "disabled"

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
            style={{marginRight: "16px"}}
          />
          <button className={"primary"} onClick={this.retrieve}>
            Retrieve details
        </button>
        </div>
        
        <p className="link">I don't know the licence number</p>
        {this.state.success ? successMessage : ""}
        {this.state.invalid ? failMessage : ""}

        {/* {this.state.error ? errorMessage : ""} */}
      </div>
    )
  }
}

export default Licence
