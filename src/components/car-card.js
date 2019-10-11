import React from "react";
import Drivername from "../components/driver-name";


const Carcard = ({ car }) => (
  
    <div className="policy-card car-card"> 
     <img src={car.cardimage} />
     {car.drivers.map((driver) => (
       <Drivername key={driver} driver={driver} />
     ))}
    <div className="add-remove">
      <p className="link">Add / remove drivers</p>
    </div>
      
    </div>
  )


export default Carcard