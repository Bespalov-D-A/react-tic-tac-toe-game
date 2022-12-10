const XoItem = ({valIndex, player, value, setValue }) => {

  const getValue = (val) => {
    if(val === 1) return <span>X</span>
      else if(val === 2) return <span>O</span>
      else return <span></span>
  }

  const style = {
    color: value === 1 ? 'red' : 'blue'
  }

  return <div onClick={ ()=>setValue(valIndex, value)}  style={style}> {getValue(value)}</div>
}

export default XoItem
