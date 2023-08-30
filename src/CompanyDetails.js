import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import JobCardList from './JobCardList';
import JoblyApi from './api';

/** Presentional Component
 * Display company details
 *
 * Prop: none
 *
 * State: none atm
 *
 * RouteList -> CompanyDetails -> JobCardList
 */

function CompanyDetails() {

  const { handle } = useParams();
  const [company, setCompany] = useState("");

  async function searchFor(handle) {
    const searchCompany = await JoblyApi.getCompany(handle);
    setCompany(searchCompany);
  }

  searchFor(handle);

  //  async function getACompany(){
  //    const company = await getCompany(handle)
  //  set setCompany(company)
  //}

  // dummy company
  // const company =
  // {
  //   id: 1,
  //   handle: 'A',
  //   description: ' I am A',
  //   jobs: [{ id: 1, title: 'SE' }, { id: 2, title: 'front desk' }]
  // };

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