import React from "react"


import Header from "../components/header"

import Qtext from "../components/q_textinput"
import Qselect from "../components/q_select"
import Qyesno from "../components/q_yesno"
import Qbuttons from "../components/q_buttons"
import Qrevealer from "../components/q_revealer"
import Qcheckbox from "../components/q_checkbox"
import Qselectclass from "../components/q_select-class"
import Qdate from "../components/q_date"
import Qlicence from "../components/q_licence"
import Qprepop from "../components/q_prepop"
import Qnumber from "../components/q_numbuttons"
import Footer from "../components/footer"
import Navbutton from "../components/molecules/navbutton"
import { checkPropTypes } from "prop-types"

const Driver2questions = () => {
  
  return (
    <div style={{ backgroundColor: '#fff', paddingBottom: '10px' }}>
      <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1563878704/m.cover_new/driver2-questions_head.jpg" />
      <div className="questions-wrapper">
        <Qbuttons
          id="title"
          question="Title"
          options={["Mr", "Mrs", "Miss", "Ms", "Dr"]}
        />
        <Qtext id="firstName" question="First name" />
        <Qtext id="surName" question="Surname" />
        <Qdate id="DOB" question="Date of birth" />
        <Qselect
          id="maritalStatus"
          question="What's their marital status"
          options={[
            "Married",
            "Single",
            "Divorced",
            "Widowed",
            "Living with partner",
            "Separated",
          ]}
        />
        <Qbuttons
          id="employment"
          question="What's their employment status?"
          options={["Employed", "Self-employed", "Retired", "Other"]}
        />
        <Qselect
          id="relationshipToYou"
          question="What's their relationship to you"
          options={[
            "Brother/Sister",
            "Partner of other relative",
            "Policyholder",
            "Spouse/Civil partner",
            "Partner of brother/sister",
            "Child",
            "Common law/Partner",
            "Grandchild",
            "Grandparent",
            "No relation",
            "Other relative",
            "Parent",
            "Partner of child",
          ]}
        />
        <Qlicence
          id="driversLicence"
          question="If you know their driving licence number, please complete it, below."
        />

        <section className="prepop-questions">
          <h4>Please check the following statements</h4>
          <Qprepop
            id="claimsAccidents"
            textbefore="Martha"
            options={["has not", "has"]}
            textafter="had any claims or accidents in the last five years, including whilst insured with us."
          />
          <Qprepop
            id="UKres"
            textbefore="Martha has been a UK resident for"
            options={[
              "more than 3 years",
              "3 years",
              "2 years",
              "1 year",
              "less than a year",
            ]}
            textafter="."
          />
        </section>
      </div>

      <Navbutton
        to="/car2-drivers-b"
        type="primary btn-block"
        cta="Add driver to this car"
        id="addDriverButton"
      />
    </div>
    
  )
}

export default Driver2questions
