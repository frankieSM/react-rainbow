//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  let [colors, setColors] = useState ([ //default color content for colorblock component
  'violet', 'blue', 'lightblue', 'green',
   'greenyellow', 'yellow', 'orange', 'red'
  ])
  
  let colorMap = colors.map((color, i)=>{
    return (
      <ColorBlock color = {color} />
    )
  })

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  //EACH CHILD IN A LIST SHOULD HAVE A UNIQUE 'KEY' PROP
  return (
    <div className="App">
      {colors.map((color, i) => (
        <ColorBlock key={i} color={color} />
      ))}
      <ColorForm addColor = {addColor} />
    </div>
  );
}

export default App;
