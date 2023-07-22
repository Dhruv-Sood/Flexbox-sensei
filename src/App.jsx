import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game";
import HomePage from "./components/HomePage";
function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [score, setScore] = useState(0);
  const [index , setIndex] = useState(0);
  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <>
      <Header score={score} seconds={seconds} />

      {gameStarted ? (
        <Game
          index={index}
          setIndex={setIndex}
          score={score}
          setScore={setScore}
          seconds={seconds}
          startTimer={setSeconds}
          setGameStarted={setGameStarted}
        />
      ) : (
        <HomePage
          startGame={startGame}
          setScore={setScore}
          setSeconds={setSeconds}
          setIndex={setIndex}
        />
      )}
    </>
  );
}

export default App;
