import axios from "axios";
import { useState } from "react";

const AddJobs = () => {
  const [jobs, setJobs] = useState({
    jobId: "",
    companyName: "",
    companyDescription: "",
    companyOverview: "",
  });

  const { jobId, companyName, companyDescription, companyOverview } = jobs;

  const onInputChange = (e) => {
    setJobs({ ...jobs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Post the new job to the server
    await axios.post("http://localhost:8000/jobs", jobs);
  };
  return (
    <div>
      <div>
        <div>
          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter JobId"
                name="jobId"
                value={jobId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Company Name"
                name="companyName"
                value={companyName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Company Description"
                name="companyDescription"
                value={companyDescription}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Company Overview"
                name="companyOverview"
                value={companyOverview}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button className="btn">AddJob</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
