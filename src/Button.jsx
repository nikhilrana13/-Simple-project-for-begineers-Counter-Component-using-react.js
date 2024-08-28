

 const Button = ({type,text,clickCount}) => {
  return (
    <button onClick={clickCount}id={type}>{text.label}</button>

  )
}


export default Button


