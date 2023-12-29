import { Link } from "react-router-dom";
import classes from "../styles/JobCard.module.css";

const JobCard = ({ job }) => {
    const { image, companyName, companyDescription, jobPosition, jobId, salary, jobLocation } = job;
    const { minimum, maximum, currencySymbol } = salary;
    const { country, city } = jobLocation;
    console.warn({ job });

    return (
        <Link to={`/job/jobDetails/${jobId}`} className={classes.linkCtn}>
            <div className={classes.jobCardContainer}>
                <div className={classes.jobCardHeader}>
                    <div className={classes.companyImageContainer}>
                        <img className={classes.companyImage} src={image} />
                    </div>
                    <div className={classes.companyDetailsContainer}>
                        <h2>{companyName}</h2>
                        <p>{companyDescription}</p>
                    </div>
                </div>
                <div className={classes.jobPositionDetails}>
                    <div>
                        <h4>{jobPosition}</h4>
                        {minimum && <p>{`${currencySymbol}${minimum} - ${currencySymbol}${maximum}`}</p>}
                        {city && <p>{`${city}, ${country}`}</p>}
                    </div>
                    <div className={classes.btnContainer}>
                        <div className={classes.saveCtn}>
                            <button type="button">Save</button>
                        </div>
                        <div className={classes.learnMoreCtn}>
                            <button type="button">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default JobCard;