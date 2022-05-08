import '../style/App.css';
import GameProvider from './context/GameContext';
import Board from './Board'

function App() {

  return (
    <div className="App">
      <GameProvider>
      <p>Hello World</p>
      <Board />
    </GameProvider>
    </div>
  );
}

export default App;