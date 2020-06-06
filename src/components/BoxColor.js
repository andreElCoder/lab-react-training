import React from "react"


function BoxColor(props){

    return(
        <h2 style={{
            backgroundColor: `rgb(${props.r},${props.g},${props.b})`
          }}>
            rgb({props.r},{props.g},{props.b})
        </h2>
    )
}
export default BoxColor