import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Game from './components/Game'
import HomePage from './components/HomePage'
function App() {

  const [gameStarted, setGameStarted] = useState(false)
  const [seconds, setSeconds] = useState(0);
  const [score, setScore] = useState(0)


  const startGame = () => {
    setGameStarted(true)
  }

  return (
    <>
      <Header score={score} seconds={seconds} />
      
      {/* <Game setScore={setScore} startTimer={setSeconds}/> */}

    {
        gameStarted ? <Game setScore={setScore} startTimer={setSeconds} /> : 
        <HomePage startGame={startGame} />
    }


    </>
  )
}

export default App
