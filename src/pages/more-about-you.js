import React from "react"
import { Link } from "react-router-dom"


import Qtext from "../components/q_textinput"
import Qselect from "../components/q_select"
import Qyesno from "../components/q_yesno"
import Qbuttons from "../components/q_buttons"
import Qrevealer from "../components/q_revealer"
import Qcheckbox from "../components/q_checkbox"
import Qselectclass from "../components/q_select-class"
import Qprepop from "../components/q_prepop"
import Footer from "../components/footer"
import Navbutton from "../components/molecules/navbutton"
import Headertext from "../components/header_text"

const MoreAboutYou = () => (
  <React.Fragment>
    <Headertext headline="A bit more about you" />
    <main>
     <div className="questions-wrapper">
        <Qselect
          id="maritalStatus"
          question="What's your marital status"
          options={[
            "Married",
            "Single",
            "Divorced",
            "Widowed",
            "Living with partner",
            "Separated",
          ]}
        />
        <Qyesno id="ownHome" question="Do you own your home?" />
        <Qbuttons
          id="employment"
          question="What's your employment status?"
          options={["Employed", "Self-employed", "Retired", "Other"]}
        />
        <section className="prepop-questions">
          <h3>Please check the following statements:</h3>
          <Qprepop
            id="UKresident"
            textbefore="You have been a UK resident for"
            options={[
              "more than 3 years",
              "2-3 years",
              "1-2 years",
              "Less than a year",
            ]}
          />
          <Qprepop
            id="convictions"
            textbefore="You, the people living with you, and those named on this policy"
            options={["do not", "do"]}
            textafter="have any unspent criminal convictions"
          />
        </section>
      </div>
    </main>
    <Footer>
      <p>By clicking below, you confirm that the above statements are true</p>
      <div className="navrow">
        
          <Navbutton rank="primary" to="/journey-selector" cta="Next  >" />
          <Navbutton rank="secondary" to="/about-you" cta="<  Back" />
          <Navbutton rank="secondary" cta="Save for later" />         
      </div>
    </Footer>
        
      
  </React.Fragment>  
)

export default MoreAboutYou
