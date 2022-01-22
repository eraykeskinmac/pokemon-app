import InView from 'react-intersection-observer';
import { PokemonsResponseResults } from '../@types/api';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import PokemonCard from '../components/PokemonCard';
import { useApp } from '../states/AppState';

const Home: React.FC<{}> = () => {
  const { pokemons, filteredPokemons } = useApp();

  if (pokemons.isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <Layout>
      <main className='container mx-auto px-6 lg:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {filteredPokemons?.map((pokemon: PokemonsResponseResults) => (
            <InView
              threshold={0.3}
              triggerOnce={true}
              rootMargin='200px 0px'
              key={pokemon.name}
            >
              {({ inView, ref }) => {
                return inView ? (
                  <PokemonCard key={pokemon.name} name={pokemon.name} />
                ) : (
                  <div
                    ref={ref}
                    className='w-full h-72 bg-gray-100 rounded-lg'
                  />
                );
              }}
            </InView>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Home;
