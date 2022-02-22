import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex';
import React from 'react';
import './App.css';
import pokemons from './Data';


class App extends React.Component {
render() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
     
    </div>
  );
}

}

export default App;