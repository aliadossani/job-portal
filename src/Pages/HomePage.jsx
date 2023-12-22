import JobCard from "../components/JobCard";

const HomePage = ({ jobList }) => {
    if (!jobList?.length) {
        return null;
    }
    return (
        <div>
            <h1>HomePage</h1>
            <div className="jobsContainer">
                {
                    jobList.map((job) => {
                        return (
                            <JobCard job={job} key={job.jobId} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default HomePage
