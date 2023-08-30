import React from 'react';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';
import CompanyDetails from './CompanyDetails';

function CompanyList() {

  // dummy companies
  const companies = [
    {
      id: 1,
      handle: 'A',
      description: ' I am A',
      jobs: [{ id: 1, title: 'SE' }, { id: 2, title: 'front desk' }]
    },
    {
      id: 2,
      handle: 'B',
      description: 'I am B',
      jobs: [{ id: 1, title: 'office man' }, { id: 2, title: 'front desk' }]
    }];

  return (
    <div className="CompanyList">
      Hola.
      <SearchForm />
      {companies.map(company =>
        <Link key={company.id} to={`/companies/${company.handle}`}>
          <CompanyCard company={company} />
        </Link>)}


    </div>
  );
}

export default CompanyList;