import React from "react"
import AnimateHeight from "react-animate-height"
import Qselect from "./q_select"

class Qradiorevealer extends React.Component {
  
  constructor(props) {
    super(props)
    this.reveal = this.reveal.bind(this)

    this.state = {
      height: 0,
      ncdHolder: ""
    }
    this.ncdRef = React.createRef()
  }

  //Reveals selector and scrolls NCD question to top
  reveal(event) {
    this.setState({
      height: "auto",
      ncdHolder: event.target.value
    })
    window.scrollTo({
      left: 0,
      top: this.ncdRef.current.offsetTop,
      behavior: "smooth",
    })
    this.props.setHolder(event.target.value)
    
    
  }

  render() {
    return(
      <React.Fragment>
        <div className="qwrap qwrap-checkbox" id={this.props.id} ref={this.ncdRef}>
          <p className="question">{this.props.question}</p>
          {this.props.options.map(option => {
            return (
              <div key={option} className="checkbox-wrap">
                <input type="radio" id={option} name={this.props.id} value={option} onChange={this.reveal}/>
                <label htmlFor={option}>{option}</label>
              </div>
            )
          })}
        </div>
        <AnimateHeight duration={500} height={this.state.height}>
          <Qselect question={"How many years no claim discount does " + this.state.ncdHolder + " have to use on this car?"} options={["0", "1", "2", "3"]} />
        </AnimateHeight>
      </React.Fragment>
    )
  }
  
}

export default Qradiorevealer
