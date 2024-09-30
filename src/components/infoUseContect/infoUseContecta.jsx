import React from 'react';
import { UserProvider, useUser } from './UserContext';

const UserProfile = () => {
  const { user, setUser } = useUser();

  // Simulating user login and setting current user data
  const loginUser = () => {
    setUser({ name: 'John Doe', email: 'john.doe@example.com' });
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user logged in</p>
      )}
      <button onClick={loginUser}>Log In</button>
    </div>
  );
};

const App = () => (
  <UserProvider>
    <UserProfile />
  </UserProvider>
);

export default App;
