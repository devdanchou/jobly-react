import React from 'react';
import JobCard from './JobCard';

/** Presentional Component
* Display a list of jobcards
*
* Prop: jobs
*   If it is from  JobList :
*       jobs: [ { id, title, salary, equity, companyHandle, companyName }, ...]
*
*   If it is from  CompanyDetails :
*       jobs: [ { id, title, salary, equity}, ...]
*
* State: none
*
* {JobList + CompanyDetails}  -> JobCardList -> JobCard
*/

//TODO: destructering what we need here
function JobCardList({ jobs }) {

  console.log("in JobCardList, jobs = ", jobs);
  return (
    <div className='JobCardList'>
      {/* TODO: destructering what we need here */}
      {jobs.map(job => <JobCard key={job.id} job={job} />)}
    </div >
  );
}

export default JobCardList;