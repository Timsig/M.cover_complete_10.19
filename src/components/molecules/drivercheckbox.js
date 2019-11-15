import React from "react"

class driverCheckBox extends React.Component {

  constructor(props) {
    super(props)
    this.toggleChecked = this.toggleChecked.bind(this)
    
    let isChecked = this.props.theDrivers.includes(this.props.option)
    this.state = {
      isChecked: isChecked
    }
  }

  toggleChecked() {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    return(
      <div key={this.props.option} className="checkbox-wrap">
        <input type="checkbox" id={this.props.option} name={this.props.id} value={this.props.option} checked={this.state.isChecked} onChange={this.toggleChecked} />
        <label htmlFor={this.props.option}>{this.props.option}</label>
      </div>
    )
  }
}

export default driverCheckBox