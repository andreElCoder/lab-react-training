import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from "./components/IdCard"
import Greetings from "./components/Greetings"
import Random from "./components/Random"
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard'
import Rating from "./components/Rating"
import DriverCard from "./components/DriverCard"
import LikeButton from "./components/LikeButton"

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
      <Random min={2} max={100}/>
      <BoxColor r={150} g={250} b={150} />
      <div id="credit-card">
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />
</div>
<Rating ratingValue={0}/>
<Rating ratingValue={1.4}/>
<Rating ratingValue={1.6}/>
<Rating ratingValue={2.54}/>
<Rating ratingValue={4}/>
<Rating ratingValue={4.6}/>

<DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }} />
<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }} />
  <LikeButton/>
    </div>
    )
 
}
}
export default App;
