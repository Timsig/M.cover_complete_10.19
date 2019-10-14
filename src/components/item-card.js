import React from "react"

const itemCard = ({ item }) => (
  <div className="policy-card item-card">
    <p>{item.type}</p>
    <p>{item.description}</p>
    <p>{item.value}</p>
  </div>
)

export default itemCard