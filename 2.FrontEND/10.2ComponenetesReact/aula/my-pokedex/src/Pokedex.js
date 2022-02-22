import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const { dados } = this.props;
    return (
      <div>
        {dados.map((poke) => < Pokemon poke={poke} /> )}
      </div>
    )
  }
}

export default Pokedex;