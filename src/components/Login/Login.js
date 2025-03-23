import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";                                 // ✅ Import CSS file
import FormContext from "../../contextApi/FormContext";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  
  const formCtx = useContext(FormContext);             // ✅ Use FormContext

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD0XCaT6bzwmQCIeY3UOurg8eECwDb2s6Q",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
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

      // ✅ Store the token in the context and localStorage
      formCtx.login(data.idToken);
      
      // Store the expiration time (1 hour later)
      const expirationTime = new Date().getTime() + 3600000; 
      localStorage.setItem("expirationTime", expirationTime);

      // Redirect to the Store page after successful login
      navigate("/store");

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
