import { useState } from 'react';
import './App.css';

function App() {
  const [total, setTotal] = useState(0)

  const add = (e) => {
    e.preventDefault()
    let currentTotal = document.querySelector('#num').value
    if (currentTotal === '') return;
    let sum = total + parseInt(currentTotal)
    setTotal(sum)
    document.querySelector('#num').value = ''
  }

  const subtract = e => {
    e.preventDefault()
    let currentTotal = document.querySelector('#num').value
    if (currentTotal === '') return;
    let sum = total - parseInt(currentTotal)
    setTotal(sum)
    document.querySelector('#num').value = ''
  }

  const multiply = e => {
    e.preventDefault()
    let currentTotal = document.querySelector('#num').value
    if (currentTotal === '') return;
    let sum = total * parseInt(currentTotal)
    setTotal(sum)
    document.querySelector('#num').value = ''
  }

  const divide = e => {
    e.preventDefault()
    let currentTotal = document.querySelector('#num').value
    if (currentTotal === '') return;
    let sum = total / parseInt(currentTotal)
    setTotal(sum)
    document.querySelector('#num').value = ''
  }


  return (
    <div className="App">
      <h1>Simplest Working Calculator</h1>
      <p>{total}</p>
      <input type='text' id='num' placeholder='0' />
      <button type='button' onClick={add}>Add</button>
      <button type='button' onClick={subtract}>Subtract</button>
      <button type='button' onClick={multiply}>Multiply</button>
      <button type='button' onClick={divide}>Divide</button>
      <button type='button' onClick={() => document.querySelector('#num').value = ''}>Reset Input</button>
      <button type='button' onClick={() => setTotal(0)}>Reset Result</button>
    </div >
  );
}

export default App;
