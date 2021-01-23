import React from 'react'
import '@audius/stems/dist/stems.css'
import '@audius/stems/dist/avenir.css'

import './App.css'

import BottomPlayer from './modules/BottomPlayer/BottomPlayer'


const App = () => {
  return (
    <div className="App">
      <BottomPlayer />
    </div>
  );
}

export default App;
