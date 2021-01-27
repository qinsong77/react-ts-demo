import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./Input"
import InputRef from "./InputRef"
import ButtonRef from "./ButtonRef"

function App() {
  const [input, setState] = useState('')
  const inputEl = useRef(null);
  function getInputValue(value: string) {
    setState(value)
  }
  useEffect(() => {
    console.log(input)
  }, [input])
  
  function getInput2Value() {
    console.log(inputEl)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Input value={'12121'} getInputValue={getInputValue}/>
      <InputRef value={'text2'} maxLength={10} ref={inputEl}/>
      <button onClick={getInput2Value}>get input2 value</button>
      <ButtonRef/>
    </div>
  );
}

export default App;
