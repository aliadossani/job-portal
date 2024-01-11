import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "../styles/JobDetailsPage.module.css";

const JobDetailsPage = ({ jobList, saveJobHandler, applyJobHandler }) => {

    const { jobId } = useParams();

    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        const currentJobDetails = jobList.find(
            (job) => job.jobId == jobId
        );
        setJobDetails(currentJobDetails);
    }, []);

    if (!jobDetails) {
        return (
            <div className={classes.noJobDetails}>Could not find the Job Details</div>
        );
    }
    const { socialLinks, companyName, companyDescription, companyOverview, jobLocation, companySize, companyTotalFunding, jobPosition, jobCreatedAt } = jobDetails;
    const { website, twitter, linkedIn } = socialLinks;
    const { country, city } = jobLocation;
    const { currencySymbol, amount } = companyTotalFunding;
    return (
        <div className={classes.jobDetailsCtn}>

            <div className={classes.detailsCtn}>
                <div className={classes.allDetails}>
                    <div className={classes.headerCtn}>
                        <div className={classes.imageCtn}>
                            <img src={jobDetails.image} />
                        </div>
                        <div className={classes.jobheaderCtn}>
                            <h2>{companyName}</h2>
                            <p>{companyDescription}</p>
                        </div>
                    </div>

                    <div className={classes.subHeaderCtn}>
                        <div className={classes.jobDetailsSubCtn}>
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
                </div>

                <div className={classes.otherDetailsCtn}>
                    <div className={classes.socialLinksCtn}>
                        <h3>About {companyName}</h3>
                        <h4>Website</h4>
                        <div className={classes.linkContainer}>
                            {website && <a>{website}</a>}
                            <div className={classes.otherLinks}>
                                {
                                    twitter &&
                                    <a className={classes.link} href={twitter} target="_blank" rel="noreferrer">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                }
                                {
                                    linkedIn &&
                                    <a className={classes.link} href={linkedIn} target="_blank" rel="noreferrer">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                }
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