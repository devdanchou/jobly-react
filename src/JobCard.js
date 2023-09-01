import React from 'react';
import './JobCard.css';

/** Presentional Component
 * Provides details about a job.
 *
 * Prop: job object
 *    { title, salary, equity, companyName }
 *
 *  If it is from CompanyDetails: there is no companyName property
 *
 * State: none
 *
 * {jobList, CompanyDetails } -> JobCardList -> JobCard
 */

function JobCard({ title, salary, equity, companyName }) {
  // console.log("in JobCard, job =", job);
  return (
    <div className='JobCard'>
      <p>{title}</p>
      <p>{companyName}</p>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  );
}

export default JobCard;