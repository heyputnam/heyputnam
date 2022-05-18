import * as React from "react"
import Header from '../components/header'
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
const PostPage = () => {
  return (
    // querys
    <>
    <h1 style={h2Styles}>post</h1>
    <Header></Header>
    </>
  )
}

export default PostPage
