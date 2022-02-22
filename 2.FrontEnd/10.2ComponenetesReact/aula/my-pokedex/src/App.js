import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex';
import pokemons from './Data';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
       <Pokedex dados={pokemons} />
      </>
    );
  }
}


export default App;
