import React from 'react'
import '@audius/stems/dist/stems.css'
import '@audius/stems/dist/avenir.css'

import './App.css'

import BottomPlayer from './modules/BottomPlayer/BottomPlayer'


const App = () => {
  return (
    <div className="App">
      <h1>BottomPlayer</h1>
      <p>An Audius API player focused on supporting independent artists! Made with ♥ by <a href="http://audius.co/bottomface/">Bottom Face</a> in 2021.</p>
      <BottomPlayer />
    </div>
  );
}

export default App;
