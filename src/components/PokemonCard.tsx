import { Link } from 'react-router-dom';
import useFindPokemon from '../hooks/find-pokemon';
import Loader from './Loader';

type PokemonCardProps = {
  name: string;
  showStats?: boolean;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ name, showStats }) => {
  const pokemon = useFindPokemon(name);

  if (pokemon.isLoading) {
    return (
      <div className='w-full h-96 bg-gray-50 border border-gray-100 rounded-lg p-4 flex justify-center items-center'>
        <Loader />
      </div>
    );
  }

  const otherSprites = pokemon.data?.data.sprites.other;

  return (
    <Link
      to={`/${name}`}
      className='group bg-gray-50 border border-gray-100 rounded-lg p-4 transition transform space-y-8 hover:shadow hover:scale-105'
    >
      <div className='w-full h-56 flex justify-center'>
        <img
          className='w-full h-full object-contain'
          src={
            otherSprites?.dream_world.front_default ||
            otherSprites?.['official-artwork'].front_default
          }
          alt={pokemon.data?.data.name}
        />
      </div>
      <div className='font-medium capitalize text-gray-500 text-xl group-hover:text-gray-700 '>
        {pokemon.data?.data.name}
      </div>
      {showStats && (
        <div className='space-y-2'>
          <header className='font-semibold text-gray-500'>Stats</header>
          {pokemon.data?.data.stats.map((stat) => {
            return (
              <div className='grid grid-cols-2 items-center space-y-1'>
                <div className='text-gray-500'>{stat.stat.name}</div>
                <div className='flex items-center space-x-4'>
                  <div className='w-full bg-gray-200 h-3'>
                    <div
                      style={{ width: `${Math.min(100, stat.base_stat)}%` }}
                      className='h-full bg-yellow-400'
                    ></div>
                  </div>
                  <div className='text-xs text-gray-400 w-8 text-right'>
                    {stat.base_stat}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Link>
  );
};

PokemonCard.defaultProps = {
  showStats: false,
};

export default PokemonCard;
