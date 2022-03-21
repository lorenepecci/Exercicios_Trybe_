import React from 'react';
import './App.css';
import useTimer from './useTimer';

function App() {
  const { number, isMultiple, timer } = useTimer();
  return (
    <div className='App'>
      <p>{`Número aleatório: ${number}`}</p>
      <p>{isMultiple && 'Acerto'}</p>
      <p>Tempo: { timer }</p>
    </div>
  );
}

export default App;