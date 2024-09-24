import { useSelector, useDispatch } from 'react-redux'; 
import { loadUser, register, login, logout } from '../store/authS'; 
import { useEffect } from 'react'; 

// Custom hook to manage authentication logic
export const useAuth = () => {
  const auth = useSelector((state) => state.auth); // Select auth state from the Redux store
  const dispatch = useDispatch(); // Get the dispatch function to send actions to the store
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // Retrieve stored user data from localStorage
    if (storedUser) {
      dispatch(loadUser(JSON.parse(storedUser))); // Dispatch loadUser action if user data exists
    }
  }, [dispatch]); // Dependency array with dispatch to run this effect only once

  // Function to handle user registration
  const handleRegister = (user) => {
    dispatch(register(user)); // Dispatch register action with user data
  };

  // Function to handle user login
  const handleLogin = (user) => {
    try {
      dispatch(login(user)); // Dispatch login action with user data
    } catch (error) {
      console.error(error.message); // Log error message to console if login fails
      return { success: false, message: error.message }; // Return failure response with error message
    }
    return { success: true }; // Return success response if login succeeds
  };

  // Function to handle user logout
  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
  };

  // Return object containing user data and auth functions
  return {
    user: auth.user, // Current user data from auth state
    register: handleRegister, 
    login: handleLogin, 
    logout: handleLogout 
  };
};




