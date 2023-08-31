import React from 'react';
import './JobCard.css';

/** Presentional Component
 * Provides details about a job.
 *
 * Prop: job
 *  Example : { id, title, salary, equity, company }
 *    where company is { handle, name, description, numEmployees, logoUrl }
 *
 * State: none
 *
 * JobCardList -> JobCard
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