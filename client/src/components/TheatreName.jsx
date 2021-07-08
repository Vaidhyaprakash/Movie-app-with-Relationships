import React, { useState } from "react";
import axios from "../axios";

function TheatreName() {
  const [name, setName] = useState({ name: "" });
  const [result, setResult] = useState({});
  function handleChange(event) {
    const newName = { name: event.target.value };
    setName(newName);
  }
  async function theatreSearch(event) {
    event.preventDefault();
    try {
      const output = await axios.post("/theatreSearch", name);
      setResult(output);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="login-form">
      <form onSubmit={theatreSearch}>
        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="Enter Theatre Name"
              // value={name.name}
              onChange={(event) => handleChange(event)}
            />
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <button type="submit" className="btn btn-primary mb-3">
            Search
          </button>
        </div>
      </form>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "200px" }}
          value={result.data}
        ></textarea>
        <label htmlFor="floatingTextarea2">Movies Running </label>
      </div>
    </div>
  );
}

export default TheatreName;
