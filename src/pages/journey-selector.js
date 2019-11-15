import React from "react"
import { Redirect } from "react-router-dom"
import Headertext from "../components/header_text"
import Hotspotaction from "../components/molecules/hotspot-action"
import { Link } from "react-router-dom"

class JourneySelector extends React.Component{
  constructor(props) {
    super(props)
    this.handleJourneySelect = this.handleJourneySelect.bind(this)

    this.state = {
      redirect: false,
      nextDest: ""
    }
  }
  
  handleJourneySelect(event){
    event.preventDefault()
    const firstLOB = event.target.id
    this.props.setFirst(firstLOB)
    const nextDest = firstLOB === "motor" ? "/builder-page" : "/about-your-home"
    this.setState({
      nextDest: nextDest,
      redirect: true
    })
  }

  render() {
    if(this.state.redirect) {
      return<Redirect to={this.state.nextDest} />
    }
    return(
      <React.Fragment>
        <Headertext headline="Which cover starts first?" />
        <main>
          
          <img src="https://res.cloudinary.com/lwcqviihu/image/upload/v1573820734/m.cover_hifi/J-selectah.png" />

         
        <Hotspotaction left={117} top={235} width={264} height={48} action={this.handleJourneySelect} id="motor"/>
        <Hotspotaction left={597} top={235} width={264} height={48} action={this.handleJourneySelect} id="home" />
          
        </main>
      </React.Fragment >
    )
  }
}
export default JourneySelector