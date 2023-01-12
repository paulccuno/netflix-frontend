import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TOKEN_KEY } from '../../constants/storage';
import { login } from '../../routes/routes';

const PrivateRoute = ({ children, ...props }) => {
  const token = localStorage.getItem(TOKEN_KEY);

  return (
    <Route
      {...props}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: login,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export default PrivateRoute;
