import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

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
    {/* <App /> */}
  </React.StrictMode>
);
