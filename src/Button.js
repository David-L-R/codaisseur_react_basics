const Button = ({ children, backgroundColor, message }) => {
  const styledButton = {
    backgroundColor: backgroundColor || 'red',
  }

  const click = (message) => {
    alert(message)
  }

  return (
    <button style={styledButton} onClick={() => click(message)}>
      {children}
    </button>
  )
}

export default Button
