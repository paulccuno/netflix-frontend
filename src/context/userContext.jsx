import React, { createContext, useState } from 'react';
import usersData from './users.json';

const DEFAULT_CONTEXT = {
  users: [],
  currentUser: null,
  updateCurrentUser: () => {},
  updateUsers: () => {},
};

const UserContext = createContext(DEFAULT_CONTEXT);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(null);

  const updateUsers = _users => {
    Array.isArray(_users) && setUsers(_users);
  };

  const updateCurrentUser = user => {
    if (typeof user === 'object' || !user) {
      setCurrentUser(user);
    }
  };

  return (
    <UserContext.Provider value={{ users, currentUser, updateUsers, updateCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
