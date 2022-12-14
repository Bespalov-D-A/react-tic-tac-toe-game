import s from './NewGame.module.css'

const NewGame = ({ setFinish, setArr, setMsg, defaultArr }) => {
  return (
    <span
      className={s['new-game']}
      onClick={() => {
        setFinish(false);
        setArr(defaultArr);
        setMsg("");
      }}
    >
      	&gt; new game &lt;
    </span>
  );
};

export default NewGame;
