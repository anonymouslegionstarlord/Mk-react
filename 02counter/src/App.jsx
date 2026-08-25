import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter((previousCounter) => Math.min(previousCounter + 1, 20));
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter((previousCounter) => Math.max(previousCounter - 1, 0));
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
