import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = (user) => {
    setRegisteredUsers([...registeredUsers, user]);
    console.log('Registered users:', registeredUsers);
  };

  const login = (user) => {
    const registeredUser = registeredUsers.find(u => u.username === user.username && u.password === user.password);
    if (registeredUser) {
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      console.log('User logged in:', user);
      return { success: true };
    } else {
      console.log('Invalid username or password');
      return { success: false, message: 'Invalid username or password' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};




