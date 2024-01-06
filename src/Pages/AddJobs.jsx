import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import { API_BASE_URL } from "../constants";

const AddJobs = ({ getJobs }) => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.companyName.value);
    //create mock
    const job = {
      "jobId": event.target.jobId.value,
      "id": event.target.jobId.value,
      "image": event.target.companyName.value,
      "companyName": event.target.companyName.value,
      "companyDescription": event.target.companyName.value,
      "companyOverview": event.target.CompanyOverview.value,
      "socialLinks": {
        "website": event.target.website.value,
        "twitter": event.target.twitter.value,
        "linkedIn": event.target.linkedIn.value
      },
      "companyTotalFunding": {
        "currencySymbol": event.target.currencySymbol.value,
        "amount": event.target.amount.value
      },
      "companyLocations": [
        {
          "country": event.target.country.value,
          "city": event.target.city.value
        }
      ],
      "companySize": event.target.companySize.value,
      "tags": [
        {
          "name": event.target.tagName.value,
          "textColor": event.target.tagTextColor.value,
          "backgroundColor": event.target.tagBackgroundColor.value
        },
      ],
      "jobPosition": event.target.jobPosition.value,
      "jobLocation": {
        "country": event.target.country.value,
        "city": event.target.city.value,
      },
      "salary": {
        "minimum": event.target.minimumSalary.value,
        "maximum": event.target.maximumSalary.value,
        "currencySymbol": event.target.currencySymbol.value,
      },
      "jobCreatedAt": "POSTED TODAY",
      "isJobSaved": false,
      "isApplied": false
    }

    //post
    axios.post(`${API_BASE_URL}`, job)
      .then(() => {
        getJobs();
        navigate(`/`);
      }).catch((err) => {
        console.error(err);
      })
  }

  return (
    <form onSubmit={onSubmit}>
      <label>jobId:
        <input type="text" name="jobId" />
      </label><br />

      <hr />
      <label>image:
        <input type="text" name="image" />
      </label>

      <hr />

      <label>CompanyName:
        <input type="text" name="companyName" />
      </label>

      <hr />

      <label>CompanyDescription:
        <input type="text" name="companyDescription" />
      </label>


      <hr />

      <label>CompanyOverview:
        <input type="text" name="CompanyOverview" />
      </label>

      <hr />
      <label>website:
        <input type="text" name="website" />
      </label>

      <label>twitter:
        <input type="text" name="twitter" />
      </label>

      <label>linkedIn:
        <input type="text" name="linkedIn" />
      </label>
      <hr />

      <label>Funding Amount:
        <input type="text" name="amount" />
      </label>
      <hr />

      <label>Country:
        <input type="text" name="country" />
      </label>

      <label>City:
        <input type="text" name="city" />
      </label>

      <hr />

      <label>CompanySize:
        <input type="text" name="companySize" />
      </label>

      <hr />
      <section>
        <h4>Tags</h4>
        <label>Name:
          <input type="text" name="tagName" />
        </label>

        <label>TextColor:
          <input type="text" name="tagTextColor" />
        </label>

        <label>BackgroundColor:
          <input type="text" name="tagBackgroundColor" />
        </label>
      </section>
      <hr />
      <label>jobPosition:
        <select name="jobPosition" >
          <option value="Web Developer">Web Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Manual Quality Assurance Engineer">Manual Quality Assurance Engineer</option>
          <option value="Automation Quality Assurance Engineer">Automation Quality Assurance Engineer</option>
          <option value="Junior FrontEnd Developer">Junior FrontEnd Developer</option>
          <option value="Marketing Lead">Marketing Lead</option>

        </select>
      </label>

      <hr />

      <label>MinimumSalary:
        <input type="text" name="minimumSalary" />
      </label>

      <label>MaximumSalary:
        <input type="text" name="maximumSalary" />
      </label>

      <label>currencySymbol:
        <select name="currencySymbol" >
          <option value="$">$</option>
          <option value="€">€</option>
          <option value="₹">₹</option>
        </select>
      </label>

      <hr />
      <button type="Submit">Submit</button>
    </form >
  )
};

export default AddJobs;
