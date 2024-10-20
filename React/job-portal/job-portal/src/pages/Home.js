// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { getJobs } from "../services/api"; // Import the API function
import JobList from "../components/JobList";
import SearchBar from "../components/SearchBar";
import LocationFilter from "../components/LocationFilter";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    async function fetchJobs() {
      const data = await getJobs(); // Call the API to fetch jobs
      setJobs(data); // Update state with the fetched jobs
    }
    fetchJobs();
  }, []);

  // Filter jobs based on search term and location
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (location === "" || job.location === location)
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <LocationFilter location={location} setLocation={setLocation} />
      <JobList jobs={filteredJobs} />
    </div>
  );
}

export default Home;
