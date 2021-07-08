import React, { useState } from "react";
import axios from "../axios";

function MovieDate() {
  const [date, setDate] = useState({ date: "" });
  const [result, setResult] = useState([]);
  function handleChange(event) {
    const newDate = { date: event.target.value };
    setDate(newDate);
  }
  async function dateSearch(event) {
    event.preventDefault();
    try {
      const output = await axios.post("/dateSearch", date);
      setResult(output);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="login-form">
      <form onSubmit={dateSearch}>
        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Release Date
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="Enter Movie Title"
              // value={title.title}
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
        <label htmlFor="floatingTextarea2">Movies are</label>
      </div>
    </div>
  );
}

export default MovieDate;
