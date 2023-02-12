import React, { useState } from "react";

function App() {
  var [count, setCount] = useState(0)
  var [value, setValue] = useState("")
  var [zp, setZp] = useState(0)
  var [geniy, setGeniy] = useState("false")
  function geniyq(){
    setGeniy(geniy = "true")
  }
  function negeniy(){
    setGeniy(geniy = "false")
  }
  function add() {
    setCount( count += 1)

  }
  function remove() {
    setCount( count -= 1)
    
  }
  return (
    <div className="App">
      <h1>IQ:{count}</h1>
      <h1>Name:{value}</h1>
      <h1>Balance:{zp}</h1>
      <h1>People: {geniy}</h1>
      <input type="checkbox" id="scales1" name="scales"/>
      <label for="scales1">Muzik</label>
      <input type="checkbox" id="scales" name="scales"/>
      <label for="scales">Girl</label>
      <br/>
      <input type="text"
       value = {value}
       onChange ={event => setValue(event.target.value)}
       />
        <input type="number"
       value = {zp}
       onChange ={event => setZp(event.target.value)}
       />
      <button onClick={add}>Add</button>
      <button onClick={remove}>remove</button>
      <button onClick={geniyq}>Geniy!</button>
      <button onClick={negeniy}>47iq</button>
    </div>
  );
}

export default App;
