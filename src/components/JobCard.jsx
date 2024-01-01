import { Link } from "react-router-dom";
import classes from "../styles/JobCard.module.css";

const JobCard = ({ job }) => {
    const { image, companyName, companyDescription, jobPosition, jobId, salary, jobLocation, companySize, tags, jobCreatedAt } = job;
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
                        <button className={classes.saveCtn} type="button">Save</button>
                        <button className={classes.learnMoreCtn} type="button">Learn More</button>

                    </div>
                </div>
            </div>
        </Link>
    );
}

export default JobCard;

