// eslint-disable-next-line no-unused-vars
import { RequestManager } from "./requestManager";

const getPokemon = async (pokemon) => {
  return RequestManager.get(`pokemon/${pokemon}`);
};

const PokedexService = {
  getPokemon,
};

export default PokedexService;
