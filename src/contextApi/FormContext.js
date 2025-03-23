import React, { useState, useEffect } from "react";

// Create the context
const FormContext = React.createContext({
  token: null,               // Store the auth token
  isLoggedIn: false,         // Check if the user is logged in
  login: (token) => {},      // Login function
  logout: () => {},          // Logout function
});

export const FormContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const isLoggedIn = !!token;  // Check if the token exists

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);   // Store token in localStorage
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");       // Remove token from localStorage
  };

  // Automatically log the user out if the token expires
  useEffect(() => {
    const expirationTime = localStorage.getItem("expirationTime");
    if (expirationTime && new Date().getTime() > +expirationTime) {
      logoutHandler();
    }
  }, []);

  const contextValue = {
    token,
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <FormContext.Provider value={contextValue}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
