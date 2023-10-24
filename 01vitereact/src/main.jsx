import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/* function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
} */

/* const reactElement = {
  type: "a",
  props: {
    href: "https://google.com   ",
    target: "_black",
  },
  children: "Click me to visit google",
}; */

/* const anotherElement = (
  <a href="https://google.com" target='_black'>Visit google !</a>
) */

const anotherUser = "chai aur react-js"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement
)
