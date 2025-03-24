import React, { useState, useRef, useContext } from "react";
import { Navigate } from "react-router-dom";  // ✅ Import Navigate for redirect
import "./Login.css";
import FormContext from "../../contextApi/FormContext";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const formCtx = useContext(FormContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Redirect to home (or store) if already logged in
  if (formCtx.isLoggedIn) {
    return <Navigate to="/store" />;  
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const enteredEmail = emailRef.current.value;
    const enteredPassword = emailRef.current.value;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCt-8tK9XB5eMsKsrQjAkXYg0pHPDH9zf4",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setIsLoading(false);

      if (!response.ok) {
        throw new Error(data.error?.message || "Authentication failed!");
      }

      formCtx.login(data.idToken);
      localStorage.setItem("token", data.idToken);  

    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return (
    <section className="login-container">
      <h1>Login</h1>
      <form onSubmit={submitHandler} className="login-form">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} required />
        </div>

        {error && <p className="error-message">❌ {error}</p>}

        <div className="actions">
          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
