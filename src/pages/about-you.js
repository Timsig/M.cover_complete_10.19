import React from "react"
import { Link, Redirect } from "react-router-dom"


import Qtext from "../components/q_textinput"
import Qselect from "../components/q_select"
import Qyesno from "../components/q_yesno"
import Qbuttons from "../components/q_buttons"
import Qrevealer from "../components/q_revealer"
import Qcheckbox from "../components/q_checkbox"
import Qselectclass from "../components/q_select-class"
import Qdate from "../components/q_date"
import Qprepop from "../components/q_prepop"
import Footer from "../components/footer"
import Navbutton from "../components/molecules/navbutton"
import Submitbutton from "../components/molecules/submitbutton"
import Licence from "../components/q_licence"
import Headertext from "../components/header_text"

class  AboutYou extends React.Component { 

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state={
      redirect: false
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.firstName.value, this.surName.value)
    const fullName = this.firstName.value + " " + this.surName.value;
    this.props.addPolicyHolder(fullName);
    this.setState({
      redirect: true
    })
  }
  render () {
    if (this.state.redirect){
      return <Redirect to="/more-about-you" />
    }
    return(
      <React.Fragment>
      <Headertext headline="About you" />
      <main>
        <div className="questions-wrapper">
          <form id="about-you" onSubmit={this.handleSubmit}>
          <Qbuttons
            id="title"
            question="Title"
            options={["Mr", "Mrs", "Miss", "Ms", "Dr"]}
          />
          <Qtext id="firstName" question="First name" reference={input => this.firstName = input}/>
            <Qtext id="surName" question="Surname" reference={input => this.surName = input}/>
          <Qdate id="DOB" question="Date of birth" />
          <Qrevealer
            id="Address"
            question="What's your postcode? Enter your home postcode and press ‘Find address’ – if you’re looking to insure a property other than the one you live in, you can add it later."
            selectId="address"
            selectQ="Please choose your address"
            selectOptions={["1 Acacia Avenue, Wingbourne", "2 Acacia Avenue, Wingbourne", "3 Acacia Avenue, Wingbourne"]}
          />
          <Qtext
            id="email"
            question="What email address should we send your documents to?"
          />
        </form>
          </div >
        <Footer form="about-you">
          <div className="navrow">
            <Submitbutton style="primary" cta="Next >" form="about-you" />
          </div>
          <div className="saverow">
            <Navbutton type="secondary" cta="Save" />
          </div>
        </Footer>
      
      </main>
      </React.Fragment>
    )
  }
}

export default AboutYou
