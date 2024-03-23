// import React from 'react'

import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice"
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, roleDice] = useState(1);
    const [error , setError] = useState('');
    const [rules , setRules ] = useState(false);

            const genreateRandomNumber = (min, max) => {
            return Math.floor(Math.random()*(max - min) + min)
        };
    
        const roleDice = () => {};

        const resetScore = () => {
            setScore(0);
        }

            if (!selectedNumber) {
                setError("you have not selected any number")
                return;
            };    
            const randomNumber = genreateRandomNumber(1,7);
            setCurrentDice((prev) => randomNumber);
    
            if(selectedNumber === randomNumber){
                setScore((prev) => prev + randomNumber);
            } else{
                setScore(prev => prev - 2)
            }

            setSelectedNumber(undefined)
        }

  return (
    <MainContainer>

        <div className="top_section">

        <TotalScore  score={score} />

        <NumberSelector 
        error = {error}
        setError = {setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber} />

        </div>

        <RoleDice 
        roleDice={setCurrentDice}
        currentDice={currentDice} />

        <div className="btns">
            <OutlineButton onClick={resetScore}>Reset</OutlineButton>
            <Button onClick={() => setShowRules((prev) => !prev)}>
                {ShowRules ? "Hide" : "Show"} Show Rules</Button>
        </div>

        {ShowRules && <Rules />}
   
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
 padding: 70px;

 top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
}
.btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 220px;
    gap: 10px;
    margin-top: 40px;
}
`;