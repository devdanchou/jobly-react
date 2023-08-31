import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobCardList from './JobCardList';
import JoblyApi from './api';

/** Presentional Component
 * Display company details
 *
 * Prop: none
 *
 * State: company :{ handle, name, description, numEmployees, logoUrl, jobs }
   *                   where jobs : [{ id, title, salary, equity }, ...]
 *
 * RouteList -> CompanyDetails -> JobCardList
 */

function CompanyDetails() {

  const DEFAULT_COMPANY = {
    handle: "Baker-Santos",
    name: "Baker-Santos",
    description: `Compare certain use.
                 Writer time lay word garden.
                 Resource task interesting voice.`,

    jobs: [{ title: 'Paramedic', Salary: '122_000', Equity: '0.047' }]
  };
  const { handle } = useParams();
  const [company, setCompany] = useState(DEFAULT_COMPANY);

  useEffect(function fetchCompanyWhenMounted() {

    async function fetchCompany(handle) {
      const searchedCompany = await JoblyApi.getCompany(handle);
      setCompany(searchedCompany);
    }

    fetchCompany(handle);
  }, []);


  return (<div>
    {company &&
      (
        <div className="CompanyDetails" >
          <p>Name:{company.handle}</p>
          <p>Description: {company.description}</p>
          <JobCardList jobs={company.jobs} />
        </div>
      )
    }
  </div>

  );
}
export default CompanyDetails;