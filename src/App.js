import logo from './logo.svg';
import './App.css';
import Xo from './components/Xo/Xo';
import {useState} from 'react';

function App() {
  const x = 1;
  const o = 2;
  const [player, setPlayer] = useState(x);
  const [finish, setFinish] = useState(false);

  return (
    <div className="app">
      <div className="right-side">

        <div className='logo-block'>
        <img src={logo} className="App-logo" alt="logo" />
          <h3>REACT <span className='x'>X</span><span className='o'>O</span></h3>
        </div>
        <div>
              <h2>
        {!finish ? (
          player === 1 ? (
            <p>
              Ходит <span style={{ color: "red" }}>X</span>
            </p>
          ) : (
            <p>
              Ходит <span style={{ color: "blue" }}>O</span>
            </p>
          )
        ) : (
          "game over"
        )}
      </h2>

        </div>
      </div>
      <div>

      </div>


      <div className='content'>
      <Xo 
        player={player} 
        setPlayer={setPlayer} 
      finish={finish}
      setFinish={setFinish}
      />
        </div>
    </div>
  );
}

export default App;
