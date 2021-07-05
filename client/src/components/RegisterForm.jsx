import React from "react";

function RegisterForm() {
  return (
    <div>
      <form className="login-form">
        <div className="mb3">
          <label className="form-label">Name</label>
          <input className="form-control" type="text" name="name" />
        </div>
        <div className="mb3">
          <label className="form-label">Age</label>
          <input className="form-control" type="number" name="age" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail2" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            name="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="password"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck2"
          />
          <label className="form-check-label" htmlFor="exampleCheck2">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
