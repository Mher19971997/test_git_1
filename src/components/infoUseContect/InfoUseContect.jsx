import React, { createContext, useContext, useState } from 'react';

// 1. Create a UserContext
const UserContext = createContext();

// 2. Create a UserProvider to wrap the app
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user state as null

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Custom hook to use UserContext
const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };


