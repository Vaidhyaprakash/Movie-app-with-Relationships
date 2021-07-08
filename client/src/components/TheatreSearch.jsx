import React from "react";
import { useHistory } from "react-router-dom";

function TheatreSearch(props) {
  const history = useHistory();
  function nameNavigate() {
    history.push({ pathname: "/TheatreName" });
  }
  function areaNavigate() {
    history.push({ pathname: "/TheatreArea" });
  }
  return (
    <div>
      {props.heading(false)}
      <h1 className="d-flex justify-content-center py-3">
        {" "}
        Search Theatres By{" "}
      </h1>
      <div className="home-cards" style={{ left: "25%" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://www.forafinancial.com/wp-content/uploads/2019/09/Change-Business-Name-In-Text.jpg"
            alt="Name"
            onClick={nameNavigate}
          />
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://searchengineland.com/figz/wp-content/seloads/2014/08/map-local-search-ss-1920.jpg"
            alt="Area"
            onClick={areaNavigate}
          />
        </div>
      </div>
    </div>
  );
}

export default TheatreSearch;
