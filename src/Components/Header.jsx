// import React from 'react'
// import '../index.css'
function Header({ bgColor, textColor }) {

  const myStyles = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <div className="container"
      style={myStyles}
    >
      <header>Feedback UI</header>
    </div>
  )
}

Header.defaultProps = {
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

export default Header
