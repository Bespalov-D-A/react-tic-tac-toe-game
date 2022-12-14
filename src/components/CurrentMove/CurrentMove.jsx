import s from './CurrentMove.module.css'

const CurrentMove = ({ finish, player }) => {
  return (
    <>
      {!finish ? (
        player === 1 ? (
          <p className={s['current-move']}>
            Ходит <span style={{ color: "red" }}>X</span>
          </p>
        ) : (
          <p className={s['current-move']}>
            Ходит <span style={{ color: "blue" }}>O</span>
          </p>
        )
      ) : (

          <p className={s['current-move'] +  ' ' + s.finish}>
            GAME OVER
          </p>
        
      )}
    </>
  );
};

export default CurrentMove;
