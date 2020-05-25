import React, { useState} from 'react';
import './App.css';
import  { store , COUNTER_INCREMENT, COUNTER_DECREMENT} from './store.js'



function App() {
  const [count, setcount] = useState('');

  const increment = e => {
      store.dispatch({type: COUNTER_INCREMENT}) 
      setcount(store.getState().counter)
  }

  const decrement = e => {
    store.dispatch({type: COUNTER_DECREMENT}) 
    setcount(store.getState().counter)
  }

  return (
    <div className="App">
      <h1>
        {store.getState().counter}
      </h1>
       <button onClick={increment}>+</button>
       <button onClick={decrement}>-</button>
    </div>
  );
  
}

export default App;
