import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetailsPage = ({ jobList }) => {
    let { jobId } = useParams();

    const [jobDetails, setJobDetails] = useState({});

    useEffect(() => {
        const currentJobDetails = jobList.find(
            (job) => job.jobId == jobId
        );
        setJobDetails(currentJobDetails);
    }, []);

    if (!jobDetails) {
        return null;
    }

    return (
        <div>
            <img src={currentJobDetails.image} />
            <h3>{currentJobDetails.companyName}</h3>

        </div>
    );
}

export default JobDetailsPage;