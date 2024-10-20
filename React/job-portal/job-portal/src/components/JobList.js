// src/components/JobList.js
import React from "react";
import "./JobList.css"; // Import your styling

function JobList({ jobs }) {
  return (
    <div className="job-list">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div className="job-item" key={job.id}>
            <h2>{job.title}</h2>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            <p>Salary: ${job.salary}</p>
            <a href={`/jobs/${job.id}`}>View Details</a>{" "}
            {/* Link to Job Details */}
          </div>
        ))
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
}

export default JobList;
