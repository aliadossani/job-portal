import { Link, useNavigate } from "react-router-dom";
import classes from "../styles/JobCard.module.css";

const JobCard = ({ job, deleteJobHandler, saveJobHandler, showDeleteButton }) => {

    const navigate = useNavigate();

    const { image, companyName, companyDescription, jobPosition, jobId, salary, jobLocation, companySize, tags, jobCreatedAt } = job;
    const { minimum, maximum, currencySymbol } = salary;
    const { country, city } = jobLocation;

    return (
        <div className={classes.container}>
            <Link to={`/job/jobDetails/${jobId}`} className={classes.linkCtn}>
                <div className={classes.jobCardContainer}>
                    <div className={classes.jobCardHeader}>
                        <div className={classes.companyImageContainer}>
                            <img className={classes.companyImage} src={image} />
                        </div>
                        <div className={classes.companyDetailsContainer}>
                            <h2>{companyName}</h2>
                            <p>{companyDescription}</p>

                            <div className={classes.companySizeCtn}>
                                <p>{companySize}</p>
                            </div>
                        </div>
                    </div>

                    <div className={classes.tagsContainer}>
                        {
                            tags.length && tags.map((tag, index) => {
                                const { name, textColor, backgroundColor } = tag;
                                return (
                                    <div className={classes.tagContainer} key={index} style={{
                                        backgroundColor: backgroundColor,
                                        color: textColor
                                    }}>
                                        {name}
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className={classes.jobDetails}>
                        <div className={classes.positionSalaryCtn}>
                            <h4>{jobPosition}</h4>
                            {city && <p>{`${city}, ${country}`}</p>}
                            {minimum && <p>{`${currencySymbol}${minimum} - ${currencySymbol}${maximum}`}</p>}
                        </div>

                        <div className={classes.btnContainer}>
                            <div className={classes.jobCreatedCtn}>
                                <p>{jobCreatedAt}</p>
                            </div>
                            <button
                                className={classes.saveCtn}
                                onClick={(event) => {
                                    event.preventDefault();
                                    // route to Edit Job Page
                                    navigate(`/UpdateJob/${jobId}`, { state: { editJobDetails: job, editJob: true } });
                                }}
                                type="button"
                            >
                                Edit
                            </button>
                            <button
                                className={classes.saveCtn}
                                type="button"
                                onClick={(event) => {
                                    event.preventDefault();
                                    saveJobHandler(job.jobId);
                                }}
                            // disabled={job.isJobSaved}
                            >{job.isJobSaved ? "Unsave" : "Save"}</button>
                            <button className={classes.learnMoreCtn} type="button">Learn More</button>

                        </div>
                    </div>


                    {
                        showDeleteButton && <div className={classes.deleteBtnContainer}>
                            <i
                                onClick={(event) => {
                                    event.preventDefault();
                                    deleteJobHandler(job.jobId)
                                }
                                }
                                className={`bi bi-x ${classes.deleteIcon}`}
                            ></i>
                        </div>}
                </div>


            </Link>


        </div >
    );
}

export default JobCard;

