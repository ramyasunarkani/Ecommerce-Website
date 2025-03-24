import React, { useState, useEffect } from "react";

const FormContext = React.createContext({
  token: null,                
  isLoggedIn: false,          
  login: (token) => {},       
  logout: () => {},           
});

export const FormContextProvider = (props) => {
  const initialToken = localStorage.getItem("token") || null;  // ✅ Get token from localStorage
  const [token, setToken] = useState(initialToken);

  const isLoggedIn = !!token;  // ✅ If token exists, user is logged in

  // ✅ Login handler: store token in state and localStorage
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);   
  };

  // ✅ Logout handler: remove token from state and localStorage
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");      
  };

  // ✅ Load token on mount (for persistence)
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
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
