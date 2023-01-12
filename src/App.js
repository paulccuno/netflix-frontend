import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  landing,
  login,
  profileSelection,
  catalog,
  movieDetail,
  profileUpdate,
} from './routes/routes';
import Landing from './pages/landing';
import Login from './pages/login';
import ProfileSelection from './pages/profileSelection';
import PrivateRoute from './components/privateRoute';
import Catalog from './pages/catalog';
import Movie from './pages/movie';
import ProfileUpdate from './pages/profileUpdate';
import { MoviesProvider } from './context/moviesContext';
import { UserProvider } from './context/userContext';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <MoviesProvider>
        <UserProvider>
          <Router>
            <Switch>
              <Route exact path={landing}>
                <Landing />
              </Route>
              <Route exact path={login}>
                <Login />
              </Route>
              <PrivateRoute exact path={profileSelection}>
                <ProfileSelection />
              </PrivateRoute>
              <PrivateRoute exact path={profileUpdate}>
                <ProfileUpdate />
              </PrivateRoute>
              <PrivateRoute exact path={catalog}>
                <Catalog />
              </PrivateRoute>
              <PrivateRoute exact path={movieDetail()}>
                <Movie />
              </PrivateRoute>
              <Route path='*'>
                <h1>404</h1>
                <h1>NOT FOUND</h1>
              </Route>
            </Switch>
          </Router>
        </UserProvider>
      </MoviesProvider>
    </div>
  );
}

export default App;
