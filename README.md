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




