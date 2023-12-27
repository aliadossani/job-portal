import "../styles/JobCard.css";

function JobCard({ data }) {
  return (
    <div className="Card">
      {data.map((job) => (
        <div className="Card1" key={job.id}>
          <div>
            <p>{`${job.title}, ${job.employment_type}, ${job.location}`}</p>
          </div>
          <div>
            <button>Apply</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobCard;
