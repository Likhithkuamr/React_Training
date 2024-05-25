import { useState } from "react";
import React from 'react'
import "./App.css";

function App() {
  const [counter, setcounter] = useState(0);
  return (
     <>
     <h1>The Number {counter}</h1>
     <button onClick={()=>setcounter(counter + 1)}>ADD</button>
     <button onClick={()=>setcounter(counter - 1)}>SUB</button>
     </>
  );
}

export default App;
