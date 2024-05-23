import { useState } from "react";
import React from 'react'
import "./App.css";

function App({name, post}) {
  return (
    <h1>Hi! i am {name}, {post} </h1>
  );
}

export default App;
