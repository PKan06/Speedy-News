import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  PageSize = 6;
  apikey = process.env.REACT_APP_NEWS_API;
  state = {
    progress : 0
  }

  setProgress = (progress)=> {
    this.setState({progress : progress})
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height = '3px'
          />
          <Navbar/>
          <div>
            <Routes>
              {/* remounting using the key */}
              <Route exact path="/" element= {<News setprogress = {this.setProgress} apikey = {this.apikey} key="general" PageSize = {this.PageSize} country = "in" category = "general"/>} />
              <Route exact path="/business" element= {<News setprogress = {this.setProgress} apikey = {this.apikey} key="business" PageSize = {this.PageSize} country = "in" category = "business"/>} />
              <Route exact path="/entertainment" element= {<News setprogress = {this.setProgress} apikey = {this.apikey} key="entertainment" PageSize = {this.PageSize} country = "in" category = "entertainment"/>} />
              <Route exact path="/health" element= {<News setprogress = {this.setProgress} apikey = {this.apikey} key="health" PageSize = {this.PageSize} country = "in" category = "health"/>} />
              <Route exact path="/science" element= {<News setprogress = {this.setProgress} apikey = {this.apikey} key="science" PageSize = {this.PageSize} country = "in" category = "science"/>} />
              <Route exact path="/sports" element= {<News setprogress = {this.setProgress} apikey = {this.apikey} key="sports" PageSize = {this.PageSize} country = "in" category = "sports"/>} />
              <Route exact path="/technology" element= {<News setprogress = {this.setProgress} apikey = {this.apikey} key="technology" PageSize = {this.PageSize} country = "in" category = "technology"/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    )
  }
}

// consst App(){
//   return{
/*
<Route path="/business"><News setprogress = {this.setProgress} apikey = {this.apikey} PageSize = {6} country = "in" category = "business"/></Route>
<Route path="/entertainment"><News setprogress = {this.setProgress} apikey = {this.apikey} PageSize = {6} country = "in" category = "entertainment"/></Route>
<Route path="/general"><News setprogress = {this.setProgress} apikey = {this.apikey} PageSize = {6} country = "in" category = "general"/></Route>
<Route path="/health"><News setprogress = {this.setProgress} apikey = {this.apikey} PageSize = {6} country = "in" category = "health"/></Route>
<Route path="/science"><News setprogress = {this.setProgress} apikey = {this.apikey} PageSize = {6} country = "in" category = "science"/></Route>
<Route path="/sports"><News setprogress = {this.setProgress} apikey = {this.apikey} PageSize = {6} country = "in" category = "sports"/></Route>
<Route path="/technology"><News setprogress = {this.setProgress} apikey = {this.apikey} PageSize = {6} country = "in" category = "technology"/></Route>
*/
//   }
// }