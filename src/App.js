import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from "./components/IdCard"
import Greetings from "./components/Greetings"

class App extends Component {

  state={
    lastName:'Doe',
    firstName:'John',
    gender:'male',
    height:178,
    birth:"1992-07-14",
    picture:"https://randomuser.me/api/portraits/men/44.jpg"
  }

  render (){ return(
    <div className="App">
      <IdCard 
      firstName={this.state.firstName}
      lastName={this.state.lastName}
      gender={this.state.gender}
      height={this.state.height}
      birth={this.state.birth}
      imageURL={this.state.picture}
      />
      <Greetings lang="es" firstName={this.state.firstName}/>
    </div>)
 
}
}
export default App;
