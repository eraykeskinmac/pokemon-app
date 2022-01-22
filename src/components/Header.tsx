import { Link } from 'react-router-dom';
import { useApp } from '../states/AppState';

const Header: React.FC<{}> = () => {
  const { searchQuery, setSearchQuery } = useApp();

  return (
    <header className='w-full py-4 shadow bg-white'>
      <div className='container mx-auto flex flex-col items-center space-y-2 px-6 md:flex-row md:space-x-4 md:space-y-0 lg:px-0'>
        <Link to='/' className='font-medium'>
          Pokemon App
        </Link>
        <div>
          <input
            type='text'
            placeholder='Search pokemon by name...'
            className='w-full border-2 border-gray-200 rounded py-2 px-4 md:w-72'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
