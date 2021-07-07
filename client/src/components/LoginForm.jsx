import React, { useState } from "react";

function LoginForm() {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <form className="login-form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <button
          type="submit"
          className="btn btn-primary register-btn"
          formAction="/Register"
        >
          Register
        </button>
        <div className="form-text registerText">
          Don't have an Account. Register now!
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
