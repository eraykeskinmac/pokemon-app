import { createContext, useContext, useMemo, useState } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { PokemonsResponse, PokemonsResponseResults } from '../@types/api';
import { pokemonApi } from '../api';

type AppContextProps = {
  pokemons: UseQueryResult<PokemonsResponse>;
  filteredPokemons: PokemonsResponseResults[] | undefined;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
};

type AppStateProviderProps = {
  children: React.ReactNode;
};

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const useApp = () => useContext(AppContext);

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const pokemons = useQuery('all-pokemons', () => {
    return pokemonApi.getAllPokemons();
  });

  const filteredPokemons = useMemo(() => {
    if (searchQuery === '') {
      return pokemons.data?.data.results;
    }
    return pokemons.data?.data.results?.filter((pokemon) => {
      return pokemon.name.includes(searchQuery);
    });
  }, [searchQuery, pokemons.data]);

  return (
    <AppContext.Provider
      value={{
        pokemons,
        filteredPokemons,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
