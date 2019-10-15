import React from "react"
import { Redirect } from "react-router-dom"
import Footer from "../components/footer"
import Headertext from "../components/header_text"
import Actionbutton from "../components/molecules/actionbutton"
import Hotspot from "../components/molecules/hotspot"
import Qselect from "../components/q_select"
import Itemcard from "../components/item-card"

class homeItems extends React.Component {

  constructor(props) {
    super(props)
    this.homeComplete = this.homeComplete.bind(this)

    this.state = {
      redirect: false
    }
  }

  homeComplete() {
    this.props.lineComplete("homeComplete")
    this.setState({
      redirect: true
    })

  }

  render() {
    if(this.state.redirect) {
      return<Redirect to="/quote" />
    }
    return(
      <React.Fragment>
        <Headertext headline="Your bikes and items" />
        <div className="builder-wrapper">
          <h2>Bikes</h2>
          
          <div className="add-item">
            <img src="https://res.cloudinary.com/lwcqviihu/image/upload/v1571063698/m.cover_complete/add_bike.png" />  
          </div>
            
          <Qselect id="bikesAway" question="How much cover do you want for bicycles that you take away from home that are worth less that £1,00 each?" options={["No cover", "Up to £2,000", "Up to £3,000", "Up to £4,000", "Up to £5,000"]} />
          <h2>Items</h2>
            {this.props.items.map((item, i) => (
              <Itemcard key={i} item={item} />
            ))}
          <div className="add-item">
            <img src="https://res.cloudinary.com/lwcqviihu/image/upload/v1571063698/m.cover_complete/add_item.png" />
            <Hotspot left={16} top={72} width={117} height={36} dest="/add-item" />
          </div>
          <Qselect id="unspecItems" question="How much cover do you want for items that you take away from home that are worth less than £2,000 each?" options={["No cover", "Up to £2,500", "Up to £3,000", "Up to £4,000", "Up to £5,000", "Up to £6,000", "Up to £7,000", "Up to £8,000", "Up to £9,000", "Up to £10,000", "Up to £11,000", "Up to £12,000", "Up to £13,000", "Up to £14,000", "Up to £15,000"]} />
          <Footer>
            <div className="navrow">
              <Actionbutton style="primary" action={this.homeComplete} cta="Get quote >" />
            </div>

          </Footer>
        </div> 

      </React.Fragment>
    )
  }

}

export default homeItems


