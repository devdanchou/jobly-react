import React from 'react';
import JobCard from './JobCard';

function JobCardList({ jobs }) {
  return (
    <div>
      Jobs: {jobs.map(job => <JobCard key={job.id} job={job} />)}
    </div >
  );
}

export default JobCardList;