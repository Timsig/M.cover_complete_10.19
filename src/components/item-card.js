import React from "react"

const itemCard = ({ item }) => (
  <div className="policy-card item-card">
    <p className="item-type">{item.type}</p>
    <div className="description-value">
      <p>{item.description}</p>
      <p>{item.value}</p>
    </div>
  </div>
)

export default itemCard