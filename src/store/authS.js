import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Initialize user as null
  registeredUsers: [] // Initialize registeredUsers as an empty array
};

const authSlice = createSlice({
  name: 'auth', // Name of the slice
  initialState, // Initial state defined above
  reducers: {
    loadUser: (state, action) => {
      state.user = action.payload; // Set user to the payload from the action
    },
    register: (state, action) => {
      state.registeredUsers.push(action.payload); // Add new user to registeredUsers array
    },
    login: (state, action) => {
      const user = state.registeredUsers.find(
        (u) => u.username === action.payload.username && u.password === action.payload.password
      ); // Find a user that matches the provided username and password
      if (user) {
        state.user = user; // Set user to the found user
        localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage
      } else {
        throw new Error('Invalid username or password'); // Throw error if user not found
      }
    },
    logout: (state) => {
      state.user = null; // Set user to null
      localStorage.removeItem('user'); // Remove user data from localStorage
    }
  }
});

export const { loadUser, register, login, logout } = authSlice.actions; // Export actions
export default authSlice.reducer; // Export the reducer
