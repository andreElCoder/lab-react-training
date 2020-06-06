import React from "react"

function Rating(props){
    let stars=""
    if(props.ratingValue>=0 && props.ratingValue<0.5){
        stars="☆☆☆☆☆"
    }
    else if(props.ratingValue>=0.5 && props.ratingValue<1.5){
        stars="★☆☆☆☆"
    }
    else if(props.ratingValue>=1 && props.ratingValue<=2.5){
        stars="★★☆☆☆"
    }
    else if(props.ratingValue>=2 && props.ratingValue<=3.5){
        stars="★★★☆☆"
    }
    else if(props.ratingValue>=3 && props.ratingValue<=4.5){
        stars="★★★★☆"
    }
    else if(props.ratingValue>=4.5 && props.ratingValue<=5){
        stars="★★★★★"
    }

    return(
        <div>
            <h1>{stars}</h1>
        </div>
    )
}

export default Rating