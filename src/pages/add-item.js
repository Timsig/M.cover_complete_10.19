import React from "react"
import { Redirect } from "react-router-dom"
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
    this.state = {
      redirect: false
    }
  }

  submitItem(event) {
    event.preventDefault()
    const item = {}
    item.type = this.itemType.value
    item.description = this.itemDescription.value
    item.value = this.itemValue.value
    this.props.addItem(item)
    this.setState({
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) {
      return<Redirect to="/home-items" />
    }
    return(
      <React.Fragment>
        <Headertext headline="Add an item worth more than £2,000" />
        <main>
          <div className="questions-wrapper">
            <form id="specItem" onSubmit={this.submitItem}>
              <Qselect id="item-type" question="Please select the type of item" options={["Jewellery/watch", "Picture/artwork", "Computer/laptop"]} reference={select => this.itemType = select} />
              <Qtext id="item-description" question="Item description" reference={input => this.itemDescription = input}/>
              <Qtext id="item-value" question="Value of the item" textBefore="£" reference={input => this.itemValue = input}/>
              <Qradiolist id="where-covered" question="Where do you want the item to be covered?" options={["At home", "Anywhere", "In the bank"]}/>
            </form>
          </div>
        </main>
        <Footer type="submit" form="about-you">
          <div className="navrow">
            <Submitbutton style="primary" cta="Add this item >" form="specItem" />
            <Navbutton style="secondary" cta="< Back" to="/about-your-home" />
          </div>
          <div className="saverow">
            <Navbutton type="secondary" cta="Save" />
          </div>
        </Footer>
          
      </React.Fragment>
    )
  }
}

export default addItem