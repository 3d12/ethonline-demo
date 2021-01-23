import React, { useEffect } from 'react'
import '@audius/stems/dist/stems.css'
import '@audius/stems/dist/avenir.css'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'

import BottomPlayer from './modules/BottomPlayer/BottomPlayer'

const App = () => {
  useEffect(() => {
          document.title = "BottomFaceMusic.com";
  });

  return (
    <div className="App">
    <BrowserRouter basename='/'>
  	<Route path='/bottomplayer' component={ BottomPlayer } exact />
  	<Route path='/' component={() => {
  	        return (
  	      	  <div className="constructionPage">
  	      	  <h1>Under Construction</h1>
  	      	  <br />
  	      	  <p>Did you perhaps intend to visit the <a href='/bottomplayer'>BottomPlayer</a>?</p>
  	      	  </div>
  	        );
  	}} exact />
    </BrowserRouter>
    </div>
  );
}

export default App;
