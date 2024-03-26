import { Switch, BrowserRouter } from 'react-router-dom';

import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/signin"><SignIn/></PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
        {/* <Route path="/">Home</Route> */}
        {/* <Route><SignIn/></Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
