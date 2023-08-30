import React from 'react';
import JobCard from './JobCard';

/** Presentional Component
* Display a list of jobcards
*
* Prop: jobs
TODO: example of jobs
*
* State: none atm
*
* JobList -> JobCardList -> JobCard
*/

function JobCardList({ jobs }) {
  return (
    <div className='JobCardList'>
      Jobs: {jobs.map(job => <JobCard key={job.id} job={job} />)}
    </div >
  );
}

export default JobCardList;