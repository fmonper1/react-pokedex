import React, { useReducer } from "react";
import "./App.css";
import PokemonInfo from "./components/PokemonInfo";
import SearchParams from "./components/SearchParams";
import PokemonContext from "./context/Pokemon.store";

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_POKEMON":
        return { ...state, pokemon: action.payload.pokemon };

      default:
        break;
    }
  };
  const store = {
    pokemon: {
      name: "Pikachu",
    },
  };
  const [state, dispatch] = useReducer(reducer, store);
  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <SearchParams />
        <PokemonInfo />
      </div>
    </PokemonContext.Provider>
  );
};

export default App;
