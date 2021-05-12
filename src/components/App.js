import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList.js';

const App = () => {
  return (
    <Provider store={store}>
      <div className="mwidth_800">
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
