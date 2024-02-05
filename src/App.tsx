import React from 'react';
import './App.css';
import Main from './Main';
import Header from './components/Header';
import { Difficulty, Screen } from './types';

function App() {
  const [screen, setScreen]: [Screen, Function] = React.useState("Home")
  const [difficulty, setDifficulty]: [Difficulty, Function] = React.useState(Difficulty.Diamond)
  return (
    <div className="App">
      <Header screen={screen} setScreen={setScreen} difficulty={difficulty} setDifficulty={setDifficulty} />
      <Main />
    </div>
  );
}

export default App;
