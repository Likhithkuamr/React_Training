This is the a repo that show my proces of learning react i upload daily what i learn . I am refering to the 
Hitesh Choudhary's React playlist <a href="https://youtube.com/playlist?list=PLRAV69dS1uWQos1M1xP6LWN6C-lZvpkmq&si=YcTOjbsPlfxPYyph">click for playlist</a><br><br>
so..lets start 😎<br><br>
|<br>
|<br>DAY1<br>
Returning a component as a variable
```jsx
function App() {
    //inerting the HTML of "a" tag in a variable
    const AnotherEle = (
        <a href="">click here!</a>
  )
    // returning the variable as a component to render
  return (
      AnotherEle
  )
}

export default App
```
|<br>
|<br>DAY2<br>
Another way to return the component(as a element)
```jsx
function App() {
  // Create a link (a) element with the text "click here !!!!"
  const Reactapp = React.createElement(
    "a", {href: ""}, "click here !!!!" );

  // Return the created link element to be rendered
  return (
    Reactapp
  );
}

export default App;
```
Variable injection
```jsx
function App() {
  // Declaration of name as variable
  const name = "Kumar";
  
  return (
    // Injecting the name as variable 
    <h1>Hi! I am {name}</h1>
  );
}
```
|<br>
|<br>DAY3<br>
using argument passed from the main.jsx file by the component
```jsx
// declaring props
function App(props) {
  return (
    // props comes as a object and the key is name
    <h1>Hi! {props.name} wellcome</h1>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // sending the name throught attribute
<App name='Kumar' />
)
```
another and esay way of using arguments
```jsx
function App({name, post}) {
  return (
    <h1>Hi! i am {name}, {post} </h1>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
<App name='Kumar' post='Student' />
)
```
|<br>
|<br>DAY4<br>
it may seem to be simple but it uses the `useState` which play a major role in react.js<br>
`useState` is a React hook that lets you add state management to functional components. It returns an array with two elements: the current state value (counter) and a function to update it (setCounter).
```jsx
// the useState is imported 
import { useState } from "react";

function App() {
  // useState is decleared 
  const [counter, setcounter] = useState(0);
  return (
     <>
     <h1>The Number {counter}</h1>
     <button onClick={()=>setcounter(counter + 1)}>ADD</button>
     <button onClick={()=>setcounter(counter - 1)}>SUB</button>
     </>
  );
}
```
|<br>
|<br>DAY5<br>
it's used in React state updates to ensure you get the most recent state value when updating.
```jsx
const addValue = () => {
  // a callback function with an argument of the previous state.
    setcounter((prevNum) => prevNum + 1);
    setcounter((prevNum) => prevNum + 1);
    setcounter((prevNum) => prevNum + 1);
  }

  return (
     <div>
     <h1>The Number {counter}</h1>
     <button onClick={addValue}>ADD</button>
     </div>
    // totaly 3 is added when the ADD btn is clicked to the `counter`
  );
  ```
  |<br>
  |<br>DAY6<br>
  This project demonstrates how to use React hooks effectively: `useState` manages state for password length and character options, `useCallback` memoizes the password generation function, `useEffect` triggers password updates on state changes, and `useRef` allows copying the password to the clipboard. 🛠️✨
  ```jsx
// a password generator
  import { useState , useCallback, useEffect, useRef} from "react";
function App() {
  const [length ,setlength] = useState(10);
  const [Numallowed ,setNumallowed] = useState(false);
  const [Charllowed ,setCharllowed] = useState(false);
  const [Password ,setpassword] = useState('');

  const passcopy = useRef(null)
  const genaratepassword = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeghijklmnopqrstuvwxyz";
      if(Numallowed) str += "0123456789";
      if(Charllowed) str += "!@#$%^&*()_";
      for(let i=1; i<length; i++){
        const char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setpassword(pass)
  }, [length, Numallowed, Charllowed])
 
  useEffect(() => {
    genaratepassword()
  }, [length, Numallowed, Charllowed])

  const copypassword = () => {
    window.navigator.clipboard.writeText(Password);
    passcopy.current?.select()
  }

  return (
     <>
        <div className="container cen">
          <h1>Passwords Generator</h1>
          <div>
            <input type="text" placeholder="Password" value={Password} className="text" readOnly ref={passcopy}/>
            <button onClick={copypassword}>Cpoy</button>
          </div>
          <div  className="cen">
              <input className="range" type="range" min={6} max={100} value={length} onChange={(e) => setlength(e.target.value) }/>
              <label htmlFor="length">length : {length}</label>
          </div>
          <div  className="cen">
              <label htmlFor="numbers">Numbers</label>
              <input className="check" type="checkbox" defaultChecked={Numallowed} onChange={() => {setNumallowed((prev) => !prev)}} />
          </div>
          <div  className="cen">
              <label htmlFor="numbers">Symbols</label>
              <input className="check" type="checkbox" defaultChecked={Charllowed} onChange={() => {setCharllowed((prev) => !prev)}} />
          </div>

        </div>
     </>
  );
}
export default App;
```
 |<br>
 |<br>DAY7<br>
Built a currency converter by integrating a API, managing rates with state hooks, and fetching latest rates with an effect hook.
 |<br>
 |<br>DAY8<br>
 Today i learnt about creating and using the `react-router-dom` is a library for React that provides routing capabilities, enabling navigation between different components in a single-page application. 🌐 It allows for dynamic URL management, making it easy to handle various routes and nested routes in your React app. 🚀
 ```jsx
//in this file all the component are imported  
 import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    // the Navbar and Footer are unchanged and the <outlet/> is repalced by the router
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
```
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Layout from './components/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
```