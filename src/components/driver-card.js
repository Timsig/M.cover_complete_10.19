import React from "react";



const Drivercard = ({ driver }) => (

  <div className="policy-card driver-card">
    <img src="https://res.cloudinary.com/lwcqviihu/image/upload/v1570463648/m.cover_complete/driver_icon.svg" />
    <p>{driver}</p>
    <p className="link">Edit</p>
  </div>
)

export default Drivercard