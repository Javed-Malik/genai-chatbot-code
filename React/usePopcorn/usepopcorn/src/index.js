import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
// import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState();
  return (
    <div>
      <StarRating color="green" maxRating={10} onSetRating={setMovieRating} />
      <p> This movie was rated {movieRating} stars </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      color="red"
      size="23"
      className="test"
      messages={["Terrible", "Bad", "OK", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating maxRating={5} />
    <Test />
    {/* <App /> */}
  </React.StrictMode>
);
