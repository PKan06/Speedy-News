import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {

  name ='vinay';
  render() {
    return (
      <div>
        <Navbar/>
        <News PageSize = {6} country = "in" category = "sports"/>
      </div>
    )
  }
}

// consst App(){
//   return{
/*
business
entertainment
general
health
science
sports
technology
*/
//   }
// }