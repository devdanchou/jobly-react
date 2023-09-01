import React, { useState } from 'react';
import SearchForm from './SearchForm';
import JobCardList from './JobCardList';
import JoblyApi from './api';

/** Presentional Component
 * Display a list of jobs and a search form
 *
 * Prop: none
 *
 * State: jobs: {
 *  data: [ { id, title, salary, equity, companyHandle, companyName }, ...],
 *   isloading:true/false
 * }
 *
 * RouteList -> JobList -> {JobCardList, SearchForm}
 */


function JobList() {

  const [jobs, setJobs] = useState({
    data: null,
    isLoading: true
  });

  console.log("in JobList, jobs= ", jobs);

  async function fetchJobs() {
    const fetchedJobs = await JoblyApi.getJobs();

    // console.log("JobList in fetchedJobs, fetchedJobs =", fetchedJobs);

    setJobs({
      isLoading: false,
      data: fetchedJobs
    });

  }


  async function searchFor(title) {

    const foundJobs = await JoblyApi.getJobs(title);
    console.log("in JobList, foundJobs =", foundJobs);
    setJobs({
      isLoading: false,
      data: foundJobs
    });

  }

  if (jobs.isLoading) {
    fetchJobs();
    return <h1>Loading...</h1>;
  }

  return (
    <div className="JobList">
      <SearchForm searchFor={searchFor} />

      {jobs.data.length === 0
        ? <h1> Not found</h1>
        : <JobCardList jobs={jobs.data} />
      }
    </div>
  );
}

export default JobList;