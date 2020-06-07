import React, { useContext } from "react";
import PokemonContext from "../context/Pokemon.store";

const PokemonInfo = (props) => {
  const { state } = useContext(PokemonContext);
  return (
    <div>
      {state.pokemon.sprites ? (
        <img
          src={state.pokemon.sprites.front_default}
          alt={state.pokemon.name}
        />
      ) : null}
      <h1>{state.pokemon.name || ""}</h1>
    </div>
  );
};

export default PokemonInfo;
