import React from "react";
import "./LocationFilter.css";

function LocationFilter({ location, setLocation }) {
  return (
    <div className="select-container">
      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">All Locations</option>
        <option value="New York">New York</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Chicago">Chicago</option>
        {/* Add more locations as needed */}
      </select>
    </div>
  );
}

export default LocationFilter;
