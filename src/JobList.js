import React from 'react';
import SearchForm from './SearchForm';
import JobCardList from './JobCardList';

function JobList() {

  //  const [jobs, setJobs] = useState([])
  //
  //  async function getJobsList(){
  //    const jobs = await getJobs()
  //  set setJobs(jobs)
  //}

  //dummy jobs
  const jobs = [
    { id: 1, title: 'SWE' },
    { id: 2, title: 'front desk' }
  ];

  // dummy function
  function searchFor() {

  }


  return (
    <div className="JobList">
      Bye.
      <SearchForm searchFor={searchFor} />
      <JobCardList jobs={jobs} />
    </div>
  );
}

export default JobList;