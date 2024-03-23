// import styled from 'styled-components';
// import './App.css'

import { useState } from "react"
import StartGame from "./Components/StartGame"
import GamePlay from "./Components/GamePlay";


function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGameplay = () => {
    
    setIsGameStarted ( (prev) => !prev);


  }
  return (
    <>
    {
    isGameStarted ? <GamePlay /> : <StartGame toggle = {toggleGameplay} />
    }
     
    </>
  )
}

export default App

// const Button = styled.button`
// background-color: black;
// color: white;
// padding: 10px;
// `;