import React, { Component } from "react"

class LikeButton extends Component{

    state={
        numOfLikes:0
    }

    liked =(event)=>{
        debugger
        event.preventDefault();
        let counter = this.state.numOfLikes+1;
        this.setState({
            numOfLikes : counter
        })
    }
    render(){
    return(
    <div>
        <h1>{this.state.numOfLikes}</h1>
        <button type ="submit" onClick={(e)=>this.liked(e)}>Liked</button>
    </div>
    )}

}
export default LikeButton