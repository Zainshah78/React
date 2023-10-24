import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(7);

  //let counter = 7

  const addValue = () => {
    //counter = counter + 1
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  /* if (counter == 11) {
    setCounter(counter - 1)
  } else if (counter == -1) {
    setCounter(counter + 1)
  } */

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
