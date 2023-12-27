import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";

function FetchData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5005/jobs")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <JobCard data={data} />;
}

export default FetchData;
