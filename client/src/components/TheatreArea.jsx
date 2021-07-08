import React, { useState } from "react";
import axios from "../axios";

function TheatreArea() {
  const [pincode, setPin] = useState({ pincode: "" });
  const [result, setResult] = useState({});
  function handleChange(event) {
    const newPin = { pincode: event.target.value };
    setPin(newPin);
  }
  async function theatreArea(event) {
    event.preventDefault();
    try {
      const output = await axios.post("/areaSearch", pincode);
      setResult(output);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="login-form">
      <form onSubmit={theatreArea}>
        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Pincode
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="colFormLabel"
              placeholder="Enter area Pincode"
              // value={pincode.pincode}
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
        <label htmlFor="floatingTextarea2">Theatres in the region </label>
      </div>
    </div>
  );
}

export default TheatreArea;
