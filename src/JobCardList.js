import React from 'react';
import JobCard from './JobCard';

/** Presentional Component
* Display a list of jobcards
*
* Prop: jobs
* example: [ { id, title, salary, equity, companyHandle, companyName }, ...]
*
* State: none
*
* JobList -> JobCardList -> JobCard
*/

function JobCardList({ jobs }) {

  console.log("in JobCardList, jobs = ", jobs);
  return (
    <div className='JobCardList'>
      Jobs: {jobs.map(job => <JobCard key={job.id} job={job} />)}
    </div >
  );
}

export default JobCardList;