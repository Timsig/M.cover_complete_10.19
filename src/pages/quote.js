import React from "react"
import Header from "../components/header"

class quote extends React.Component {
  constructor(props) {
    super(props)
    const { firstLOB, motorComplete, homeComplete } = this.props
    
    //Logic to determine which quote page to display
    let image = ""
    if (firstLOB === "motor") {
      if (!homeComplete) {
        image = "https://res.cloudinary.com/lwcqviihu/image/upload/v1571141105/m.cover_complete/Multicar_FLOB_-_Annual_price.jpg"
      }else{
        image = "https://res.cloudinary.com/lwcqviihu/image/upload/v1571141107/m.cover_complete/Home_SLOB_-_No_product_selection.jpg"
      }
    }else if (firstLOB === "home") {
      if (!motorComplete) {
        image = "https://res.cloudinary.com/lwcqviihu/image/upload/v1571141104/m.cover_complete/Home_FLOB_-_No_product_selection.jpg"
      }else{
        image = "https://res.cloudinary.com/lwcqviihu/image/upload/v1571141107/m.cover_complete/Single_car_SLOB_-_Annual_price.jpg"
      }
    }

    this.state = {
      image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1571141108/m.cover_complete/Single_car_SLOB_-_Monthly_price.jpg"
    }
  }

  render() {
    return (
      <Header image={this.state.image} />
    )
  }
}
export default quote