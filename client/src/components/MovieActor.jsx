import React, { useState } from "react";
import axios from "../axios";

function MovieActor() {
  const [data, setData] = useState({
    hero: undefined,
    heroine: undefined,
  });
  const [result, setResult] = useState([]);
  function handleChange(event) {
    const newData = { ...data };
    newData[event.target.name] = event.target.value;
    setData(newData);
    console.log(data);
  }
  async function actorSearch(event) {
    event.preventDefault();
    try {
      const output = await axios.post("/actorSearch", data);
      setResult(output);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="login-form">
      <form
        onSubmit={(event) => {
          handleChange(event);
          actorSearch(event);
        }}
      >
        <div className="form-check form-switch form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Hero
          </label>
        </div>
        <div className="form-check form-switch form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            Heroine
          </label>
        </div>
        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Hero
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="Enter Movie Title"
              name="hero"
              required
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
          value={JSON.stringify(result.data)}
        ></textarea>
        <label htmlFor="floatingTextarea2">Running In</label>
      </div>
    </div>
  );
}

export default MovieActor;
