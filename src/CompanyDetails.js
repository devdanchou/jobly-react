import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobCardList from './JobCardList';
import JoblyApi from './api';

/** Presentional Component
 *  Display company details
 *
 * Prop: none
 *
 * State: company :{
 *    data: { handle, name, description, numEmployees, logoUrl, jobs },
 *    isLoading:true/false
 *    }
 *
 *    where jobs in data : [{ id, title, salary, equity }, ...]
 *
 * RouteList -> CompanyDetails -> JobCardList
 */

function CompanyDetails() {

  const { handle } = useParams();
  const [company, setCompany] = useState({
    data: null,
    isLoading: true,
  });

  useEffect(function fetchCompanyOnHandleChange() {
    async function fetchCompany(handle) {
      const searchedCompany = await JoblyApi.getCompany(handle);
      setCompany({
        data: searchedCompany,
        isLoading: false,
      });
    }

    fetchCompany(handle);
  }, [handle]);

  if (company.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="CompanyDetails" >
      <p>{company.data.name}</p>
      <p>{company.data.description}</p>
      <JobCardList jobs={company.data.jobs} />
    </div>
  );

}
export default CompanyDetails;