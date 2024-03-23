import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
        <h2>
            How to Play dice game
        </h2>
        <div className="text">
            <p>Select any Number</p>
            <p>Click on the dice image</p>
            <p>after click on dice if selected is equal to dice number you will get same point as dice</p>
            <p>if you get wrong then 2 points will be deducted</p>
        </div>

    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
border-radius: 10px;
background-color: #fbf1f1;
padding: 20px;
h2{
    font-size: 24px;
}

.text{
    margin-top: 24px;
}

`;