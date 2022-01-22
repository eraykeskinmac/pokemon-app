import { PokemonResponse, PokemonsResponse } from '../@types/api';
import client from './client';

const getAllPokemons = async (): Promise<PokemonsResponse> =>
  client.get('/pokemon?limit=2000');

const getPokemon = async (name: string): Promise<PokemonResponse> =>
  client.get(`/pokemon/${name}`);

const pokemonApi = { 
  getAllPokemons,
  getPokemon,
};

export default pokemonApi;
