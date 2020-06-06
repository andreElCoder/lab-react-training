import React from "react"

function CreditCard(props){
    let image
    switch (props.type){
        case "Visa": image="img/visa.png";break
        case "Master Card": image="img/master-card.svg";break

    }
    return(

            <div style={{backgroundColor: `${props.bgColor}`,width: "30vw",height:"20vh"}}>
            <img style={{margin:"2% 0% 2% 80%"}}src={image} width = "10%"></img>
            <h2 style={{margin:"0% 0% 0% 25%"}}>・・・・ ・・・・ ・・・・ {props.number.slice(12)}</h2>
            <h3 style={{margin:"0% 0% 0% 5%"}}>Expires {props.expirationMonth}/{props.expirationYear}</h3>
            <h3 style={{margin:"0% 0% 0% 5%"}}>{props.owner}</h3>
            </div>
    )
}

export default CreditCard