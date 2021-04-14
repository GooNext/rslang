import styled from 'styled-components';

const GamePageWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100vh;
  margin-left: 100px;
  
  @media (max-width: 768px) {
    margin-left: 0px;
    }
    
  @media (max-width: 485px) {
    margin-top: 50px;
    }
  }
  
  .game-title {
    font-family: 'Exo', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 33px;
    text-align: center;
    color: #784AC1;
  }
  
  .grid-container {
    "audiocall audiocall memory "
    "savannah center speakit"
    "sprint puzzle puzzle ";
    align-items: center;
    max-width: 1000px;
    flex-wrap: wrap;
    align-content: stretch;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    
    @media (max-width: 485px) {
      grid-template-columns: 150px 150px;
      grid-template-rows: 150px 150px 150px 150px;
      grid-template-areas: 
      "audiocall audiocall "
      "savannah speakit"
      "memory sprint"
      "puzzle puzzle";
    }
  }
  
  .audiocall,
  .memory,
  .savannah,
  .speakit,
  .sprint,
  .puzzle {
    justify-self: stretch;
    align-self: stretch;
    box-shadow: 1px 8px 18px #00000038;
    border-radius: 25px;
    margin: 15px 15px;
    
    &:hover,
    &:focus,
    &:active {
      outline:none;
      text-decoration: none;
      filter: saturate(2);
    }
  }
  
  .center {
    grid-area: center;
    background: url('/assets/images/gamePage/center.png');
    justify-self: stretch;
    align-self: stretch;
    
    @media (max-width: 485px) {
      display: none;
    }
  }
  
  .audiocall {
    grid-area: audiocall;
    background-color: #f1e134;
  }
    
  .memory {
    background-color: #407df4;
    grid-area: memory;
  }
  
  .savannah {
    background-color: #5e6978;
    grid-area: savannah;
    }
  
  .speakit {
    background-color: #407df4;
    grid-area: speakit;
    }
  
  .sprint {
    background-color: #a0befa;
    grid-area: sprint;
    }
  
  .puzzle {
    background-color: #ff5267;
    grid-area: puzzle;
    }
    
  .game-name {
    font-family: 'Exo', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 300px;
    text-shadow: 1px 1px 1px #00000078;
  }  
  .game-name span {
    margin-bottom: 25px;
  }  
`;

export default GamePageWrapper;
