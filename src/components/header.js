import * as React from "react"
import IconImg from "../images/icon.png"
const h1Styles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  color: 'red',
}

const Header = () => {
  return (
    // querys
    <>
    <img

    alt="Gatsby G Logo"
    src={IconImg} width='24' height='24' fill='none'
  />
    <h1 style={h1Styles}>header</h1>
</>

  )
}

export default Header;
