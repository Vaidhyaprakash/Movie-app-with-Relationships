import React from "react";

function TheatreSearch(props) {
  return (
    <div>
      {props.heading(false)}
      <h1 className="d-flex justify-content-center py-3"> Search Movies By </h1>
      <div className="home-cards" style={{ left: "25%" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://www.forafinancial.com/wp-content/uploads/2019/09/Change-Business-Name-In-Text.jpg"
            alt="Name"
          />
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://searchengineland.com/figz/wp-content/seloads/2014/08/map-local-search-ss-1920.jpg"
            alt="Area"
          />
        </div>
      </div>
    </div>
  );
}

export default TheatreSearch;
