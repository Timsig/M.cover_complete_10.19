import React from "react"
import Headertext from "../components/header_text"
import Qselect from "../components/q_select"
import Qtext from "../components/q_textinput"
import Qradiolist from "../components/q_radiolist"
import Footer from "../components/footer"
import Navbutton from "../components/molecules/navbutton"
import Submitbutton from "../components/molecules/submitbutton"


class addItem extends React.Component {
  constructor(props) {
    super(props)
    this.submitItem = this.submitItem.bind(this)
  }

  submitItem(event) {
    console.log(this.itemType.value, this.itemDescription.value, this.itemValue.value)
  }

  render() {
    return(
      <React.Fragment>
        <Headertext headline="Add an item worth more than £2,000" />
        <div className="questions-wrapper">
          <form id="specItem" onSubmit={this.submitItem}>
            <Qselect id="item-type" question="Please select the type of item" options={["Jewellery/watch", "Picture/artwork", "Computer/laptop"]} reference={select => this.itemType = select} />
            <Qtext id="item-description" question="Item description" reference={input => this.itemDescription = input}/>
            <Qtext id="item-value" question="Value of the item" reference={input => this.itemValue = input}/>
            <Qradiolist id="where-covered" question="Where do you want the item to be covered?" options={["At home", "Anywhere", "In the bank"]}/>
          </form>
          <Footer type="submit" form="about-you">
            <div className="navrow">
              <Submitbutton style="primary" cta="Next >" form="specItem" />
            </div>
            <div className="saverow">
              <Navbutton type="secondary" cta="Save" to="/more-about-you" />
            </div>
          </Footer>
        </div>
      </React.Fragment>
    )
  }
}

export default addItem