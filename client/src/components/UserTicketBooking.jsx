import React, { useState } from "react";

function UserTicketBooking() {
  return (
    <div className="login-form">
      <form>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            name="USERId"
          />
          <label htmlFor="floatingInput">UserId</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingPassword"
            name="MOVIEId"
          />
          <label htmlFor="floatingPassword">MovieId</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput2"
            name="THEATREId"
          />
          <label htmlFor="floatingInput2">TheatreId</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingPassword2"
            name="SCREENId"
          />
          <label htmlFor="floatingPassword2">ScreenId</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingP"
            name="ticketCount"
          />
          <label htmlFor="floatingP">Number of Tickets</label>
        </div>
        <div style={{ textAlign: "right" }}>
          <button type="submit" className="btn btn-primary mb-3">
            Book Ticket
          </button>
        </div>
      </form>
      <div className="form-floating">
        <textarea
          className="form-control"
          id="floatingTextarea2"
          style={{ height: "250px" }}
        ></textarea>
        <label htmlFor="floatingTextarea2">Ticket Details </label>
      </div>
    </div>
  );
}

export default UserTicketBooking;
