import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {BrowserRouter,Routes,Route} from "react-router-dom";

const App = () => {
  const PageSize = 6;
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)

    return (
      <>
        <BrowserRouter>
          <LoadingBar
            color='#f11946'
            progress={progress}
            height = '3px'
          />
          <Navbar/>
          <div>
            <Routes>
              {/* remounting using the key */}
              <Route exact path="/" element= {<News setprogress = {setProgress} apikey = {apikey} key="general" PageSize = {PageSize} country = "in" category = "general"/>} />
              <Route exact path="/business" element= {<News setprogress = {setProgress} apikey = {apikey} key="business" PageSize = {PageSize} country = "in" category = "business"/>} />
              <Route exact path="/entertainment" element= {<News setprogress = {setProgress} apikey = {apikey} key="entertainment" PageSize = {PageSize} country = "in" category = "entertainment"/>} />
              <Route exact path="/health" element= {<News setprogress = {setProgress} apikey = {apikey} key="health" PageSize = {PageSize} country = "in" category = "health"/>} />
              <Route exact path="/science" element= {<News setprogress = {setProgress} apikey = {apikey} key="science" PageSize = {PageSize} country = "in" category = "science"/>} />
              <Route exact path="/sports" element= {<News setprogress = {setProgress} apikey = {apikey} key="sports" PageSize = {PageSize} country = "in" category = "sports"/>} />
              <Route exact path="/technology" element= {<News setprogress = {setProgress} apikey = {apikey} key="technology" PageSize = {PageSize} country = "in" category = "technology"/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    )
}

export default App
