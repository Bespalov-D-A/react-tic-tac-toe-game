import { useEffect, useState } from "react";
import XoItem from "../XoItem/XoItem";

const defaultArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

  const x = 1;
  const o = 2;

const Xo = ({finish, setFinish, player, setPlayer}) => {
  const [arr, setArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [msg, setMsg] = useState("");
  const [draw, setDraw] = useState(false);

  const equalNum = (one, two, three) => {
    let bool = false;
    let newArray = [one, two, three];
    console.log(newArray);
    if (newArray.includes(0)) return;
    for (let i = 0; i < newArray.length; i++) {
      const gog = newArray.filter((item) => item === newArray[i]);
      if (gog.length === 3) bool = true;
    }
    return bool;
  };

  const changeArr = (arr, stateArr) => {
    if (iterFunc(arr, stateArr)) setFinish(true);
    if (!stateArr.includes(0)) {
      setDraw(true);
      setMsg("Ничья!");
      setFinish(true);
    }
  };

  //Массив массивов состоящих из 3 чисел
  const iterFunc = (numArr, stateArr) => {
    let bool = false;
    for (let z = 0; z < numArr.length; z++) {
      const computed = [
        stateArr[numArr[z][0] - 1],
        stateArr[numArr[z][1] - 1],
        stateArr[numArr[z][2] - 1],
      ];
      if (equalNum(...computed)) bool = true;
    }
    console.log("ОТСЕЧКА");
    return bool;
  };

  const setValue = (index, val) => {
    if (val || finish) return;
    const newArr = [...arr];
    newArr.splice(index, 1, player);
    setArr(newArr);
    setPlayer(player === x ? o : x);
  };

  useEffect(() => {
    changeArr(data, arr);
  }, [player]);

  useEffect(() => {
    if (finish && !draw)
      setMsg("Player" + " " + (player === 1 ? "O" : "X") + "  win");
  }, [finish]);

  const getInputs = (array) => {
    //@ts-ignore
    return array.map((item, index) => (
      <XoItem
        key={index}
        setValue={setValue}
        valIndex={index}
        value={item}
        player={player}
      />
    ));
  };

  return (
    <div
      style={{
        width: "200px",
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span>{msg}</span>
      <div className="boxValue">{getInputs(arr)}</div>
      <span
        onClick={() => {
          setFinish(false);
          setArr(defaultArr);
          setMsg("");
        }}
      >
        new game
      </span>
    </div>
  );
};

export default Xo;
