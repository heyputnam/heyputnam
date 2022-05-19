import * as React from "react"
import HomePage from '../components/homepage'
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
const TestPage = () => {
  return (
    // querys
    <>
    <h1 style={h2Styles}>testing</h1>
    <HomePage />
    </>
  )
}

export default TestPage
