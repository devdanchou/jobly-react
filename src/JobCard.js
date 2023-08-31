import React from 'react';
import './JobCard.css';

/** Presentional Component
 * Provides details about a job.
 *
 * Prop:
 *  If it is from JobList:
 *     job : {{ id, title, salary, equity, companyHandle, companyName }
 *
 *  If it is from CompanyDetails:
 *     job : { id, title, salary, equity }
 *
 * State: none
 *
 * {jobList, CompanyDetails } -> JobCardList -> JobCard
 */

function JobCard({ job }) {
  // console.log("in JobCard, job =", job);
  return (
    <div className='JobCard'>
      <p>{job.title}</p>
      <p>{job.companyHandle}</p>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  );
}

export default JobCard;