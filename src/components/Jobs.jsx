import React from "react";

function Jobs() {
  const jobList = [
    {
      title: "Full Time Sales Associate - Sydney Boutique",
      contractType: "CDI",
      country: "Australie",
      city: "Sydney",
      className: "hotjob",
    },
    {
      title: "Agent de Sécurité - Pantin",
      contractType: "CDI",
      country: "France",
      city: "Pantin",
      className: "hotjob",
    },
    {
      title: "Responsable d'Atelier (H/F)",
      contractType: "CDD",
      country: "France",
      city: "Paris",
      className: "",
    },
    {
      title: "Chef de Projets",
      contractType: "CDD",
      country: "France",
      city: "Paris",
      className: "",
    },
    {
      title: "Développeur React.js",
      contractType: "CDI",
      country: "France",
      city: "Paris",
      className: "",
    },
    {
      title: "Sales Associate Stockholm",
      contractType: "CDI",
      country: "Suède",
      city: "Stockholm",
      className: "hotjob",
    },
    {
      title: "Vendeur/se - Crans Montana",
      contractType: "CDI",
      country: "Suisse",
      city: "Crans-Montana",
      className: "",
    },
    {
      title: "CRM & Data Quality Analyst",
      contractType: "CDI",
      country: "USA",
      city: "New York",
      className: "",
    },
    {
      title: "Infirmier (H/F)",
      contractType: "CDI",
      country: "France",
      city: "Pantin",
    },
  ];

  return (
    <>
      <div className="jobs-list">
        {jobList.map((job, index) => (
          <Job
            key={index}
            title={job.title}
            contractType={job.contractType}
            country={job.country}
            city={job.city}
            className={job.className}
          />
        ))}
      </div>
    </>
  );
}

export default Jobs;
