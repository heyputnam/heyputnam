import * as React from "react"
import Header from '../components/header'
import BackgroundImg from '../images/websiteCover.png'
// styles
const pageStyles = {
  color: 'black',
  padding: '1rem',
  fontFamily: "-apple-system",
}
const h1Styles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  color: 'red',
}
const h2Styles = {
  color: "green",
}
const paragraphStyles = {
  marginBottom: 48,
}

// data


// markup
const IndexPage = () => {
  return (
    // querys
    <>
    <img src={BackgroundImg} display='flex'/>
    <h1 style={h2Styles}>fuck</h1>
    <Header></Header>
    </>
  )
}

export default IndexPage
