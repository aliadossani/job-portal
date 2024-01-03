import JobCard from "../components/JobCard";

const HomePage = ({ jobList, deleteJobHandler }) => {
    if (!jobList?.length) {
        return null;
    }
    return (
        <div>
            {
                jobList.map((job) => {
                    return (
                        <JobCard job={job} key={job.jobId} deleteJobHandler={deleteJobHandler} />
                    )
                })
            }
        </div>
    );
}

export default HomePage;
