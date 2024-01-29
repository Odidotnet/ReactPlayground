import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  // the counter inside the [] is a variable and the setCounter is function
  //let counter = 15

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div className="body">
        <h1>React Practical project {counter}</h1>
        <h2>counter value: {counter}</h2>
        <button onClick={addValue}>Add Value</button> {""}
        <button onClick={removeValue}>remove value</button>
        <p>footer : {counter}</p>
      </div>
    </>
  );
}

export default App;
