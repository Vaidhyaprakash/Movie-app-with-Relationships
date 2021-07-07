import React from "react";

function MovieSearch(props) {
  return (
    <div>
      {props.heading(false)}
      <h1 className="d-flex justify-content-center py-3"> Search Movies By </h1>
      <div className="home-cards">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://www.forafinancial.com/wp-content/uploads/2019/09/Change-Business-Name-In-Text.jpg"
            alt="Movie Name"
          />
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://us.123rf.com/450wm/copacool/copacool1703/copacool170303238/74230017-sello-de-goma-con-palabra-de-actor-aislado-en-blanco.jpg?ver=6"
            alt="Actor"
          />
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://thumbs.dreamstime.com/b/wood-tack-word-art-date-photograph-spelled-out-push-pins-97755700.jpg"
            alt="Date"
          />
        </div>
      </div>
    </div>
  );
}

export default MovieSearch;
