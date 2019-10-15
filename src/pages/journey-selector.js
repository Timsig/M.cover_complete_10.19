import React from "react"
import { Redirect } from "react-router-dom"
import Header from "../components/header"
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
        <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1570458150/m.cover_complete/Journey_selector.jpg" />
        <Hotspotaction left={35} top={602} width={250} height={50} action={this.handleJourneySelect} id="motor"/>
        <Hotspotaction left={35} top={961} width={250} height={50} action={this.handleJourneySelect} id="home" />
      </React.Fragment >
    )
  }
}
export default JourneySelector