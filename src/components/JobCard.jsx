import React from "react";
import "../styles/JobCard.css";

function JobCard() {
  const skills = ["Javascript", "React", "Nodejs"];
  return (
    <div className="Card">
      <div className="Card1">
        <div>
          <h3>Frontend developer- Amazon</h3>
          <p>Full Time &#x2022; Fresher &#x2022; In-Office</p>
          <div>
            {skills.map((skill) => {
              <p>{skill}</p>;
            })}
          </div>
        </div>
        <div>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
