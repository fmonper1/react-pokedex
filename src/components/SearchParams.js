import React, { useContext, useState, useEffect } from "react";
import PokedexService from "../services/pokedex.service";
import PokemonContext from "../context/Pokemon.store";

const SearchParams = () => {
  const { dispatch } = useContext(PokemonContext);
  const [searchTerm, setSearchTerm] = useState("Pikachu");

  useEffect(() => {
    PokedexService.getPokemon(searchTerm.toLowerCase())
      .then((res) => {
        dispatch({
          type: "SET_POKEMON",
          payload: {
            pokemon: res.data,
          },
        });
      })
      .catch((err) => {
        console.error();
      });
  });

  return (
    <div className="saerch-params">
      <form>
        <label htmlFor="searchTerm">
          SearchParams
          <input
            id="searchTerm"
            value={searchTerm}
            placeholder="Pokemon name"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
