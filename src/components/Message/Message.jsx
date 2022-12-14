import s from './Message.module.css'

const Message = ({msg}) => {
  return <h2 className={s.msg}>{msg}</h2>
}

export default Message 
