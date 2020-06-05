import React from "react"

function IdCard (props){
    return (
    <div>
        <img src={props.imageURL}></img>
        <h2>First name : {props.firstName}</h2>
        <h2>Last name : {props.lastName}</h2>
        <h2>Gender : {props.gender}</h2>
        <h2>Height : {props.height}</h2>
        <h2>Birth : {props.birth}</h2>
    </div>
    )
}
export default IdCard