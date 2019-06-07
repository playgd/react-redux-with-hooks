import React from 'react'
import Counter from './counter'
import logo from './logo.svg'
import './app.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter />
      </header>
    </div>
  )
}

export default App
