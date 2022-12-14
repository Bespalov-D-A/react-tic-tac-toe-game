import CurrentMove from "../CurrentMove/CurrentMove"
import logo from "./../../logo.svg";
import s from './RightSide.module.css'

const RightSide = ({finish, player}) => {
  return <div className={s['right-side']}>
        <div className={s['logo-block']}>
          <img src={logo} className={s['app-logo']} alt="logo" />
          <h3>
            REACT <span className={s.x}>X</span>
            <span className={s.o}>O</span>
          </h3>
        </div>
        <div className={s['current-move']}>
          <h2>
            <CurrentMove finish={finish} player={player} />
          </h2>
        </div>
      </div>
}

export default RightSide
