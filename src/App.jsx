import { Switch, BrowserRouter } from 'react-router-dom';
// import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import { ProfileProvider } from './context/profile.context';

function App() {
  return (
    <ProfileProvider>
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/signin">
          
          <SignIn/></PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
        {/* <Route path="/">Home</Route> */}
        {/* <Route><SignIn/></Route> */}
      </Switch>
    </BrowserRouter>
    </ProfileProvider>
  );
}

export default App;
