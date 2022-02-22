import React from "react";

class Pokemon extends React.Component {
  render() {
    const {poke:  { name, type, averageWeight, image } } = this.props;
    return (
      <div className="pokemon">
        <h1>Name: {name}</h1>
        <h3>Type: {type}</h3>
        <h4>AverageWeight: {averageWeight.value} {averageWeight.measurementUnit}</h4>
        <img src={image} alt={name}/>
      </div>
    );
  }
}

export default Pokemon;