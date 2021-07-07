import React from "react";

function Settings(props) {
  function handleUpdate() {
    console.log(props);
  }
  return (
    <form className="login-form was-validated">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingName"
          placeholder="Name"
          required
        />
        <label htmlFor="floatingPassword">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="number"
          className="form-control"
          id="floatingAge"
          placeholder="Age"
          required
        />
        <label htmlFor="floatingPassword">Age</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          required
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          required
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button
        type="submit"
        className="btn btn-primary register-btn"
        onClick={handleUpdate}
      >
        Update
      </button>
      <button type="submit" className="btn btn-primary">
        Delete Account
      </button>
    </form>
  );
}

export default Settings;
