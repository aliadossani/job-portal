import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetailsPage = ({ jobList }) => {
    let { jobId } = useParams();

    const [jobDetails, setJobDetails] = useState({});

    useEffect(() => {
        const currentJobDetails = jobList.find(
            (job) => job.id === jobId
        );
        setJobDetails(currentJobDetails);
    }, [jobId]);

    return (
        <div>
            <img src={jobDetails.image} />
            <h3>{jobDetails.companyName}</h3>

        </div>
    );
}

export default JobDetailsPage;