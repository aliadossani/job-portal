import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
    const { jobPosition, jobId } = job;
    console.warn({ job });

    return (
        <Link to={`/job/jobDetails/${jobId}`}>
            <div>
                <h1>{jobPosition}</h1>
            </div>
        </Link>
    );
}

export default JobCard;