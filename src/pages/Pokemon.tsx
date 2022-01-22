import { useNavigate, useParams } from 'react-router';
import Layout from '../components/Layout';
import PokemonCard from '../components/PokemonCard';
import useFindPokemon from '../hooks/find-pokemon';

const Pokemon: React.FC<{}> = () => {
  const navigate = useNavigate();

  const { pokemon: pokemonName } = useParams();

  const pokemon = useFindPokemon(pokemonName);

  if (pokemon.isLoading) {
    return <div>loading...</div>;
  }

  return (
    <Layout>
      <div className='container mx-auto px-6 md:px-0'>
        {pokemon.data && (
          <div className='grid justify-items-strech space-y-6'>
            <PokemonCard name={pokemon.data.data.name} showStats />
            <div
              role='button'
              className='text-sm text-gray-400'
              onClick={() => navigate(-1)}
            >
              Back
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
export default Pokemon;
