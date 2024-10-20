import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../services/api";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    async function fetchJobDetails() {
      const data = await getJobById(id);
      setJob(data);
    }
    fetchJobDetails();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <h3>{job.company}</h3>
      <p>{job.description}</p>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p>
        <strong>Salary:</strong> {job.salary}
      </p>
    </div>
  );
}

export default JobDetails;
