import React from "react"

function Random(props){
    return(
        <div>
            <h2>Random value between {props.min} and {props.max} => {Math.floor(Math.random()*props.max)+props.min}</h2>
        </div>
    )
}

export default Random