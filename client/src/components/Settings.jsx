import React, { useState } from "react";
import axios from "../axios";

function Settings() {
  const [email, setEmail] = useState({});
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });
  function handleEmail(event) {
    const value = { email: event.target.value };

    setEmail(value);
  }
  async function deleteAccount(event) {
    event.preventDefault();
    try {
      const output = await axios.post("/userDelete", email);
      alert(output.data);
    } catch (err) {
      console.log(err);
    }
  }
  function handleChange(event) {
    const newData = { ...data };
    newData[event.target.name] = event.target.value;
    setData(newData);
  }
  async function handleUpdate(event) {
    event.preventDefault();
    try {
      const put = await axios.put("/user", data);
      alert(put.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className="login-form was-validated">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingName"
          placeholder="Name"
          name="name"
          required
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="floatingPassword">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="number"
          className="form-control"
          id="floatingAge"
          placeholder="Age"
          name="age"
          required
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="floatingPassword">Age</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          name="email"
          required
          onChange={(event) => {
            handleEmail(event);
            handleChange(event);
          }}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          name="password"
          required
          onChange={(event) => handleChange(event)}
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
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(event) => {
          handleEmail(event);
          deleteAccount(event);
        }}
      >
        Delete Account
      </button>
    </form>
  );
}

export default Settings;
