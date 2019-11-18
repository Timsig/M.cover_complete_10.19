import React from "react"
import { Redirect } from "react-router-dom"
import Footer from "../components/footer"
import Headertext from "../components/header_text"
import Actionbutton from "../components/molecules/actionbutton"
import Hotspot from "../components/molecules/hotspot"
import Qselect from "../components/q_select"
import Itemcard from "../components/item-card"
import Navbutton from "../components/molecules/navbutton"

class homeItems extends React.Component {

  constructor(props) {
    super(props)
    this.homeComplete = this.homeComplete.bind(this)

    this.state = {
      nextDest: "",
      redirect: false
    }
  }

  homeComplete() {
    this.props.lineComplete("homeComplete")
    this.props.lineComplete("motorComplete")
    let nextDest = this.props.firstLOB === "home" ? "/quote-home-flob" : "/quote-home-slob"
    this.setState({
      nextDest: "/the-end",
      redirect: true
    })

  }

  render() {
    if(this.state.redirect) {
      return<Redirect to={this.state.nextDest} />
    }
    return(
      <React.Fragment>
        <Headertext headline="Your bikes and items" />
        <div className="builder-wrapper">
          
          <h2>Bikes</h2>
          <div className="bikes">  
            <div className="add-item">
              <img src="https://res.cloudinary.com/lwcqviihu/image/upload/v1573818327/m.cover_hifi/Add-bike.png" />  
            </div>
          </div>  
          <Qselect id="bikesAway" question="How much cover do you want for bicycles that you take away from home that are worth less that £1,000 each?" options={["No cover", "Up to £2,000", "Up to £3,000", "Up to £4,000", "Up to £5,000"]} />
          
          <h2>Items</h2>
          <div className="items">
              {this.props.items.map((item, i) => (
                <Itemcard key={i} item={item} />
              ))}
            <div className="add-item">
              <img src="https://res.cloudinary.com/lwcqviihu/image/upload/v1573818327/m.cover_hifi/Add-item.png" />
              <Hotspot left={16} top={50} width={105} height={36} dest="/add-item" />
            </div>
          </div>
          <Qselect id="unspecItems" question="How much cover do you want for items that you take away from home that are worth less than £2,000 each?" options={["No cover", "Up to £2,500", "Up to £3,000", "Up to £4,000", "Up to £5,000", "Up to £6,000", "Up to £7,000", "Up to £8,000", "Up to £9,000", "Up to £10,000", "Up to £11,000", "Up to £12,000", "Up to £13,000", "Up to £14,000", "Up to £15,000"]} /> 
        </div>
          <Footer>
            <div className="navrow">
              <Actionbutton style="primary" action={this.homeComplete} cta="Get quote >" />
              <Navbutton style="secondary" cta="< Back" to="/about-your-home" />
              <Navbutton style="secondary" cta="Save for later" />
            </div>
          </Footer>
         
      </React.Fragment>
    )
  }

}

export default homeItems


