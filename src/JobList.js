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
 *   isloading:true/false,
 *   searchedJob: { id, title, salary, equity, company }
 *    where company is { handle, name, description, numEmployees, logoUrl }
 *   errors: null
 *
 * }
 *
 * RouteList -> JobList -> {JobCardList, SearchForm}
 */

function JobList() {

  const [jobs, setJobs] = useState({
    data: null,
    isLoading: true,
    searchedJob: null,
    errors: null
  });

  // console.log("in JobList, jobs= ", jobs);

  async function fetchJobs() {

    try {
      const fetchedJobs = await JoblyApi.getJobs();

      // console.log("JobList in fetchedJobs, fetchedJobs =", fetchedJobs);

      setJobs({
        isLoading: false,
        data: fetchedJobs,
        searchedJob: null,
        errors: null
      });

    } catch (err) {

      setJobs({
        isLoading: false,
        data: null,
        searchedJob: null,
        errors: err
      });
    }
  }

  function findId(title) {
    const foundJob = jobs.data.find((job) => job.title === title);
    if (foundJob) {
      return foundJob.id;
    }
  }

  async function searchFor(title) {

    try {
      const id = findId(title);
      console.log("in JobList, title = ", title);
      console.log("in JobList, id = ", id);

      const foundJob = await JoblyApi.getJob(id);
      console.log("in JobList, foundJob = ", foundJob);
      setJobs({
        ...jobs,
        isLoading: false,
        searchedJob: foundJob,
        errors: null
      });
    } catch (err) {

      setJobs({
        ...jobs,
        isLoading: false,
        searchedJob: null,
        errors: err
      });
    }
  }

  if (jobs.isLoading) {
    fetchJobs();
    return <h1>Loading...</h1>;
  } else if (jobs.errors) {
    console.log('JobList error=', jobs.errors);
    return <b> Errors occured!</b>;
  }


  return (
    <div className="JobList">
      Bye.
      <SearchForm searchFor={searchFor} />
      {jobs.searchedJob
        ? <JobCardList jobs={[jobs.searchedJob]} />
        : <JobCardList jobs={jobs.data} />
      }
    </div>
  );
}

export default JobList;