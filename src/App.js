import {useEffect, useState} from 'react';
import './App.css';
import React from 'react';
import {Button} from '@material-ui/core';

function Example() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks'}]);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
      <div>
          <p>You clicked {count} times</p>
          <Button
            variant="contained"
            onClick={() => setCount(count + 1)}>
              <span class="mdc-button__label">Add</span>
          </Button>
          <Button
              variant="contained" 
              onClick={() => setCount(count - 1)}>
              Subtract
          </Button>
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Example />
      </header>
    </div>
  );
}

export default App;
