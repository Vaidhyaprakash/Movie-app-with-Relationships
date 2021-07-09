import React, { useState } from "react";
import axios from "../axios";

function UserTicketBooking() {
  const [data, setData] = useState({
    USERId: "",
    MOVIEId: "",
    THEATREId: "",
    SCREENId: "",
    ticketCount: "",
  });
  //const [output, setOutput] = useState({});
  const [result, setResult] = useState([]);
  function change(event) {
    const newData = { ...data };
    newData[event.target.name] = event.target.value;
    setData(newData);
  }
  async function bookTicket(event) {
    event.preventDefault();
    try {
      const Result = await axios.post("/TicketBooking", data);
      setResult(Result);
      // const date = result.data.pop();
      // const Sn = result.data.pop();
      // const screen = result.data.pop();
      // const theatre = result.data.pop();
      // const movie = result.data.pop();
      // const name = result.data.pop();
      // const out = {
      //   Name: name,
      //   Movie: movie,
      //   Theatre: theatre,
      //   Screen: screen,
      //   "Seat Number": Sn,
      //   Date: date,
      // };
      // setOutput(out);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="login-form">
      <center>
        <h1>Ticket Booking</h1>
      </center>

      <form onSubmit={bookTicket}>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            name="USERId"
            onChange={(event) => change(event)}
          />
          <label htmlFor="floatingInput">UserId</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingPassword"
            name="MOVIEId"
            onChange={(event) => change(event)}
          />
          <label htmlFor="floatingPassword">MovieId</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput2"
            name="THEATREId"
            onChange={(event) => change(event)}
          />
          <label htmlFor="floatingInput2">TheatreId</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingPassword2"
            name="SCREENId"
            onChange={(event) => change(event)}
          />
          <label htmlFor="floatingPassword2">ScreenId</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingP"
            name="ticketCount"
            onChange={(event) => change(event)}
          />
          <label htmlFor="floatingP">Number of Tickets</label>
        </div>
        <div style={{ textAlign: "right" }}>
          <button type="submit" className="btn btn-primary mb-3">
            Book Ticket
          </button>
        </div>
      </form>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="floatingTextarea2"
          style={{ height: "250px" }}
          value={result.data}
          readOnly
        ></textarea>
        <label htmlFor="floatingTextarea2">Ticket Details </label>
      </div>
    </div>
  );
}

export default UserTicketBooking;
