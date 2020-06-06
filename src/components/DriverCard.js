import React from "react"
import Rating from "./Rating"

function DriverCard(props){
    return(
    <div className="driver">
    <img src = {props.img}></img>
    <div className="driver-info">
    <h1>{props.name}</h1>
    <Rating ratingValue={props.rating}></Rating>
    <h2>{props.car.model}</h2>
    </div>
    </div>
    )
}

export default DriverCard