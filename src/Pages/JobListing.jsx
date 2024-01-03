import JobCard from "../components/JobCard";
import classes from "../styles/HomePage.module.css"
import NoJobImage from "../assets/nojob.png";

const JobListing = ({ jobList, deleteJobHandler, saveJobHandler,  }) => {
    if (!jobList?.length) {
        return (
            <div className={classes.noJobCtn}>
                <img src={NoJobImage} alt="No Jobs found" />
                <h2>No Jobs Found</h2>
            </div>
        )
    }
    return (
        <div className={classes.jobListing}>
            {
                jobList.map((job) => {
                    return (
                        <JobCard job={job} key={job.jobId} deleteJobHandler={deleteJobHandler} saveJobHandler={saveJobHandler} />
                    )
                })
            }
        </div>
    );
}

export default JobListing;
