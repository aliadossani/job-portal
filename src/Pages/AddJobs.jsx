import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/AddJobs.css";

import { API_BASE_URL } from "../constants";

const AddJobs = ({ getJobs }) => {
  const navigate = useNavigate();

  const { state } = useLocation();

  const editJobDetails = state ? state.editJobDetails : {};

  const onSubmit = (event) => {
    event.preventDefault();

    //create mock
    const job = {
      jobId: event.target.jobId.value,
      id: event.target.jobId.value,
      image: event.target.image.value,
      companyName: event.target.companyName.value,
      companyDescription: event.target.companyName.value,
      companyOverview: event.target.CompanyOverview.value,
      socialLinks: {
        website: event.target.website.value,
        twitter: event.target.twitter.value,
        linkedIn: event.target.linkedIn.value,
      },
      companyTotalFunding: {
        currencySymbol: event.target.currencySymbol.value,
        amount: event.target.amount.value,
      },
      companyLocations: [
        {
          country: event.target.country.value,
          city: event.target.city.value,
        },
      ],
      companySize: event.target.companySize.value,
      tags: [
        {
          name: event.target.tagName.value,
          textColor: event.target.tagTextColor.value,
          backgroundColor: event.target.tagBackgroundColor.value,
        },
      ],
      jobPosition: event.target.jobPosition.value,
      jobLocation: {
        country: event.target.country.value,
        city: event.target.city.value,
      },
      salary: {
        minimum: event.target.minimumSalary.value,
        maximum: event.target.maximumSalary.value,
        currencySymbol: event.target.currencySymbol.value,
      },
      jobCreatedAt: new Date().toLocaleDateString(),
      isJobSaved: false,
      isApplied: false,
    };

    if (state?.editJob) {
      //put edit job
      axios
        .put(`${API_BASE_URL}/${editJobDetails.jobId}`, job)
        .then(() => {
          getJobs();
          navigate(`/`);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      //post add job
      axios
        .post(`${API_BASE_URL}`, job)
        .then(() => {
          getJobs();
          navigate(`/`);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <form className="form-box" onSubmit={onSubmit}>
      <label>
        jobId:
        <input
          type="text"
          name="jobId"
          defaultValue={editJobDetails?.jobId}
          disabled={!!editJobDetails?.jobId}
        />
      </label>
      <br />

      <label>
        image:
        <input type="text" name="image" defaultValue={editJobDetails?.image} />
      </label>

      <label>
        CompanyName:
        <input
          type="text"
          name="companyName"
          defaultValue={editJobDetails?.companyName}
        />
      </label>

      <label>
        CompanyDescription:
        <input
          type="text"
          name="companyDescription"
          defaultValue={editJobDetails?.companyDescription}
        />
      </label>

      <label>
        CompanyOverview:
        <input
          type="text"
          name="CompanyOverview"
          defaultValue={editJobDetails?.companyOverview}
        />
      </label>

      <label>
        website:
        <input
          type="text"
          name="website"
          defaultValue={editJobDetails?.socialLinks?.website}
        />
      </label>

      <label>
        twitter:
        <input
          type="text"
          name="twitter"
          defaultValue={editJobDetails?.socialLinks?.twitter}
        />
      </label>

      <label>
        linkedIn:
        <input
          type="text"
          name="linkedIn"
          defaultValue={editJobDetails?.socialLinks?.linkedIn}
        />
      </label>

      <label>
        Funding Amount:
        <input
          type="text"
          name="amount"
          defaultValue={editJobDetails?.companyTotalFunding?.amount}
        />
      </label>

      <label>
        Country:
        <input
          type="text"
          name="country"
          defaultValue={editJobDetails?.jobLocation?.country}
        />
      </label>

      <label>
        City:
        <input
          type="text"
          name="city"
          defaultValue={editJobDetails?.jobLocation?.city}
        />
      </label>

      <label>
        CompanySize:
        <input
          type="text"
          name="companySize"
          defaultValue={editJobDetails?.companySize}
        />
      </label>

      <section>
        <h4>Tags</h4>
        <label>
          Name:
          <input
            type="text"
            name="tagName"
            defaultValue={editJobDetails?.tags && editJobDetails?.tags[0]?.name}
          />
        </label>

        <label>
          TextColor:
          <input
            type="text"
            name="tagTextColor"
            defaultValue={
              editJobDetails?.tags && editJobDetails?.tags[0]?.textColor
            }
          />
        </label>

        <label>
          BackgroundColor:
          <input
            type="text"
            name="tagBackgroundColor"
            defaultValue={
              editJobDetails?.tags && editJobDetails?.tags[0]?.backgroundColor
            }
          />
        </label>
      </section>

      <label>
        jobPosition:
        <select name="jobPosition" selected={editJobDetails?.jobPosition}>
          <option value="Web Developer">Web Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Manual Quality Assurance Engineer">
            Manual Quality Assurance Engineer
          </option>
          <option value="Automation Quality Assurance Engineer">
            Automation Quality Assurance Engineer
          </option>
          <option value="Junior FrontEnd Developer">
            Junior FrontEnd Developer
          </option>
          <option value="Marketing Lead">Marketing Lead</option>
        </select>
      </label>

      <label>
        MinimumSalary:
        <input
          type="text"
          name="minimumSalary"
          defaultValue={editJobDetails?.salary?.minimum}
        />
      </label>

      <label>
        MaximumSalary:
        <input
          type="text"
          name="maximumSalary"
          defaultValue={editJobDetails?.salary?.maximum}
        />
      </label>

      <label>
        currencySymbol:
        <select name="currencySymbol" selected={editJobDetails?.currencySymbol}>
          <option value="$">$</option>
          <option value="€">€</option>
          <option value="₹">₹</option>
        </select>
      </label>

      <button type="Submit">Submit</button>
    </form>
  );
};

export default AddJobs;
