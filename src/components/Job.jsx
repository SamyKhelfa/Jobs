import React from "react";

function Job({ title, contractType, country, city, className }) {
  return (
    <div className={`job ${className}`}>
      <h2>{title}</h2>
      <div className="job-details">
        <p>{contractType}</p> -<p>{country}</p> -<p>{city}</p>
      </div>
    </div>
  );
}

export default Job;
