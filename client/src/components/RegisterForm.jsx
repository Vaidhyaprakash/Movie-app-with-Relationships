import React, { useState } from "react";
import axios from "../axios";
import { useHistory } from "react-router-dom";

function RegisterForm() {
  const [Email, setEmail] = useState();
  const history = useHistory();
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const newData = { ...data };
    newData[event.target.name] = event.target.value;
    setData(newData);
  }
  async function createUser(event) {
    event.preventDefault();
    try {
      await axios.post("/user", data).then(function (response) {
        setEmail(data.email);
        console.log(Email);
        history.push({ pathname: "/Home", state: { email: Email } });
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <form className="login-form was-validated" onSubmit={createUser}>
        <div className="mb3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={data.name}
            required
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="mb3">
          <label className="form-label">Age</label>
          <input
            className="form-control"
            type="number"
            name="age"
            value={data.age}
            required
            onChange={(event) => handleChange(event)}
          />
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
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            value={data.email}
            onChange={(event) => handleChange(event)}
            required
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
            value={data.password}
            required
            onChange={(event) => handleChange(event)}
          />
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
