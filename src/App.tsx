import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/app-router';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <NavBar /> */}
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
