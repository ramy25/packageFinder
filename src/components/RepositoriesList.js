import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';

const RepositoriesList = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector((state) => state.repositories);

  const onSubmit = (event) => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="searchInput"
          placeholder="Type the package name..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data.map((pkg) => (
          <div className="pckgBox" key={pkg.name}>
            <h1>{pkg.name}</h1>
            <h2>{pkg.description}</h2>
            <h3>Useful links</h3>
            <ul>
              {Object.entries(pkg.links).map(([key, val]) => (
                <li key={key}>
                  <a rel="noreferrer" target="_blank" href={val}>
                    {key}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default RepositoriesList;
