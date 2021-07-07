import React, { useState } from "react";
import axios from "../axios";

function MovieName() {
  const [title, setTitle] = useState({ title: "" });
  const [result, setResult] = useState({});
  function handleChange(event) {
    const newTitle = { title: event.target.value };
    setTitle(newTitle);
  }
  async function movieSearch(event) {
    event.preventDefault();
    try {
      const output = await axios.post("/movieSearch", title);
      setResult(output);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="login-form">
      <form onSubmit={movieSearch}>
        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="Enter Movie Title"
              value={title.title}
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
        <label htmlFor="floatingTextarea2">Result</label>
      </div>
    </div>
  );
}

export default MovieName;
