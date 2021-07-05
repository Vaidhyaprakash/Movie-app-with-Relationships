import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";

function Home() {
  return (
    <div>
      <SettingsIcon className="SettingsIcon" fontSize="large" />
      <div className="home-cards">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="http://www.geemagic.com/wp-content/uploads/2016/04/The-Movie-Product.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <center>
              <h5 className="card-title">Movie</h5>
              <a href="https://www.google.com" className="btn btn-primary">
                Details
              </a>
            </center>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdmllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <center>
              <h5 className="card-title">Theatre</h5>
              <a href="www.google.com" className="btn btn-primary">
                Details
              </a>
            </center>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://theponderroar.com/wp-content/uploads/2017/11/movie.jpeg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <center>
              <h5 className="card-title">Book Ticket</h5>
              <a href="www.google.com" className="btn btn-primary">
                Now
              </a>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
