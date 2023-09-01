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

function JobCardList({ jobs }) {

  console.log("in JobCardList, jobs = ", jobs);
  return (
    <div className='JobCardList'>
      {jobs.map(({ id, title, salary, equity, companyName }) =>
        <JobCard
          key={id}
          salary={salary}
          title={title}
          equity={equity}
          companyName={companyName}
        />)}
    </div >
  );
}

export default JobCardList;