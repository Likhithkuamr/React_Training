import { useState , useCallback, useEffect, useRef} from "react";
import React from 'react'
import './app.css'


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
