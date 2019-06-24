import React from 'react';
import './App.css';
import './game.css'
import TodoApp from "./components/TodoApp";
import Game from "./components/Game/Game";

function App() {
  return (
    <div className="App">
      <TodoApp/>
      <Game/>
    </div>
  );
}

export default App;
