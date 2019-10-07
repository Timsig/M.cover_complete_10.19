import React from "react";
import { Link, Redirect } from "react-router-dom"
import Qtext from "../components/q_textinput"
import Footer from "../components/footer"
import Qcheckbox from "../components/q_checkbox"
import Navbutton from "../components/molecules/navbutton"

class Testpage extends React.Component {

  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      redirect: false
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("colour:", this.colour.value);
    this.props.updateColour(this.colour.value)
    this.setState(
      {redirect: true}
    )
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/page2" />
    }
    return ( 
      <div>
        <form id="colourForm" onSubmit={this.handleSubmit}>
          <div className="questions-wrapper">
            <Qtext question="Whats your favourite colour?" id="colour" reference={input => this.colour = input}/>
            <Qcheckbox id="colours" question="Pick some colours" options={["red", "green", "purple"]} />
          </div>
        </form> 
        
          <button type="submit" form="colourForm">Submit</button>
        
      </div>

        // <Footer>
        //   <div className="navrow">
        //     <div type="submit">
        //       <Navbutton type="submit" form="colourForm" cta="Submit"/>
        //     </div>
        //   </div>
        //   <div className="saverow">

        //   </div>
        // </Footer>
      
    )
  }
}

export default Testpage;

// const Testpage = ({ updateColour }) => (
//   <div>
//     <div className="questions-wrapper">
//       <Qtext question="Whats your favourite colour?" />
//     </div>
//     <Footer>
//       <div className="navrow">
//         <Navbutton type="primary" cta="Submit" action={updateColour} />
//       </div>
//       <div className="saverow">

//       </div>
//     </Footer>
//   </div>
// )

