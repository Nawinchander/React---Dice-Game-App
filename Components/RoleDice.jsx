import { useState } from "react";
import styled from "styled-components";

  return (
    <DiceContainer>
        <div className="dice" onClick={() => roleDice}>
            <img src={`./Images/dice_${currentDice}.png`} alt="dice 1" />
        </div>
        <p>Click on Dice to roll</p>

    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
 margin-top: 48px;
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 
 .dice {
    cursor: pointer;
    
 }

 p{
    font-size: 24px;

 }

`;

