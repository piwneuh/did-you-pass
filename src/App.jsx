import React, { useState } from 'react'
import logo from './ivan.png'
import './App.css'

function App() {
  
  const [count, setCount]=useState(0)

  if(localStorage.getItem('count') == 0) {
    return(
      <div className="App">   
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <audio src="https://assets.codepen.io/1256430/whistle.mp3" id="sound" preload="auto" hidden></audio>
          <p>Hello Ivan !</p>
          <p>Ladno si diplomirao </p>
          <p>Congratujesns</p>
        </header>
      </div>
    )
  }

  if(localStorage.getItem('count') == 1){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Ivan !</p>
        <p>Imas jos "samo": {localStorage.getItem('count')} ispit </p>
        <p>
          <button type="button" className="btn" fire:any onClick={() => localStorage.setItem('count', localStorage.getItem('count') - 1)}>
            Ladno si polozio ispit
          </button>
        </p>
      </header>
    </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Ivan !</p>
        <p>Imas jos "samo": {localStorage.getItem('count')} ispita </p>
        <p>
          <button type="button" className="btn" onClick={() => localStorage.setItem('count', localStorage.getItem('count') - 1)}>
            Ladno si polozio ispit
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
