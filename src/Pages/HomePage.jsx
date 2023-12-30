import JobCard from "../components/JobCard";

const HomePage = ({ jobList }) => {
    if (!jobList?.length) {
        return null;
    }
    return (
        <div>
            {
                jobList.map((job) => {
                    return (
                        <JobCard job={job} key={job.jobId} />
                    )
                })
            }
        </div>
    );
}

export default HomePage;
