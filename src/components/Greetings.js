import React from "react";

function Greetings(props){
    let chosenLang = "en"
    switch(props.lang){
        case "de" : chosenLang="Ludwig";break
        case "fr" : chosenLang="Bonjour";break;
        case "es" : chosenLang="Hola";break;
    }
    return(<div>
        <h2>{chosenLang} {props.firstName}</h2>
    </div>)
}
export default Greetings