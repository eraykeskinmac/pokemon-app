export type Stat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type PokemonsResponseResults = {
  name: string;
  url: string;
};

export type PokemonsResponse = {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonsResponseResults[];
  };
};

export type PokemonResponse = {
  data: {
    name: string;
    sprites: {
      other: {
        dream_world: {
          front_default: string;
        };
        'official-artwork': {
          front_default: string;
        };
      };
    };
    stats: Stat[];
  };
};
