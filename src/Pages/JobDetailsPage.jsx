import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "../styles/JobDetailsPage.module.css";

const JobDetailsPage = ({ jobList, saveJobHandler, applyJobHandler }) => {

    let { jobId } = useParams();

    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        const currentJobDetails = jobList.find(
            (job) => job.jobId == jobId
        );
        setJobDetails(currentJobDetails);
    }, []);

    if (!jobDetails) {
        return null;
    }
    const { socialLinks, companyName, companyDescription, companyOverview, jobLocation, companySize, companyTotalFunding, jobPosition, jobCreatedAt } = jobDetails;
    const { website, twitter, linkedIn } = socialLinks;
    const { country, city } = jobLocation;
    const { currencySymbol, amount } = companyTotalFunding;
    return (
        <div className={classes.jobDetailsCtn}>
            <img src={jobDetails.image} />
            <div className={classes.jobDetailsSubCtn}>
                <div className={classes.headerDetailsCtn}>
                    <div className={classes.JobheaderCtn}>
                        <h2>{companyName}</h2>
                        <h3>{companyDescription}</h3>
                        <p>{companyOverview}</p>
                    </div>
                    <div className={classes.jobCtn}>
                        <h2>Job</h2>
                        <div className={classes.jobPositionCtn}>
                            <h4>{jobPosition}</h4>
                            <div className={classes.buttonCtn}>
                                <p>{jobCreatedAt}</p>
                                <button type="button" onClick={(event) => {
                                    event.preventDefault();
                                    saveJobHandler(jobDetails.jobId);
                                }}

                                >{jobDetails.isJobSaved ? "Unsave" : "Save"}</button>
                                <button type="button" onClick={(event) => {
                                    event.preventDefault();
                                    applyJobHandler(jobDetails.jobId);
                                }}

                                >{jobDetails.isApplied ? "Applied" : "Apply"}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.otherDetailsCtn}>
                    <div className={classes.socialLinksCtn}>
                        <h3>About {companyName}</h3>
                        <h4>Website</h4>
                        <div className={classes.linkContainer}>
                            <a>{website}</a>
                            <div className={classes.otherLinks}>
                                <a className={classes.link} href={twitter} target="_blank" rel="noreferrer">
                                    <i class="bi bi-twitter"></i>
                                </a>
                                <a className={classes.link} href={linkedIn} target="_blank" rel="noreferrer">
                                    <i class="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </div>

                        <div className={classes.locationCtn}>
                            <h4>Locations</h4>
                            <p>{country}</p>
                            <p>{city}</p>
                        </div>

                        <div className={classes.companySizeCtn}>
                            <h4>Company Size</h4>
                            <p>{companySize}</p>
                        </div>

                        <div className={classes.companyFundingCtn}>
                            <h4>Total raised</h4>
                            <p>{`${currencySymbol}${amount}`}</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default JobDetailsPage;