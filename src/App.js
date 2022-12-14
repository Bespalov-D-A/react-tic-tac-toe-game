import "./App.css";
import Xo from "./components/Xo/Xo";
import { useState } from "react";
import RightSide from "./components/RightSide/RightSide";

function App() {
  const x = 1;
  const o = 2;
  const [player, setPlayer] = useState(x);
  const [finish, setFinish] = useState(false);

  return (
    <div className="app">
      <RightSide finish={finish} player={player} />
      <div className="content">
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
