import { useState } from 'react'
import './App.css'
import PizzaPlace from './components/pizzaPlace'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="Header">
        <h1>Top Pizza Places in Brooklyn</h1>
        <p>Find the best pizza places in Brooklyn here!</p>
      </div>
      <PizzaPlace />
    </div>
  )
}

export default App