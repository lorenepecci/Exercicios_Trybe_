import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const { dados } = this.props;
    return (
      <>
        {dados.map((poke) => < Pokemon data={poke} /> )}
      </>
    )
  }
}

export default Pokedex;