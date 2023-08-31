import React, { useState, useEffect } from 'react';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import JoblyApi from './api';
import { Link } from 'react-router-dom';

/** Presentional Component
 * Display a list of companies and search form
 *
 * Prop: none
 *
 * State: companies :[ { handle, name, description, numEmployees, logoUrl }, ...]
 *
 * RouteList -> CompanyList -> {CompanyCard, SearchForm}
 */

function CompanyList() {

  const DEFAULT_COMPANY = {
    handle: "Baker-Santos",
    name: "Baker-Santos",
    description: `Compare certain use.
                 Writer time lay word garden.
                 Resource task interesting voice.`,

    jobs: [{ title: 'Paramedic', Salary: '122_000', Equity: '0.047' }]
  };
  const [companies, setCompanies] = useState([]);
  const [currCompany, setCurrCompany] = useState(DEFAULT_COMPANY);

  console.log("in CompanyList and companies = ", companies);

  useEffect(function fetchCompanies() {
    async function getCompanies() {
      const newCompanies = await JoblyApi.getCompanies();

      console.log("this is newCompanies ==>", newCompanies);

      setCompanies(newCompanies);
    }
    getCompanies();
  }, []);


  async function searchFor(handle) {
    const searchCompany = await JoblyApi.getCompany(handle);
    setCurrCompany(searchCompany);
  }


  let displayCompanies;

  if (companies.length !== 0) {
    displayCompanies = companies.map(company =>
      <Link key={company.handle} to={`/companies/${company.handle}`}>
        <CompanyCard company={company} />
      </Link>);
  }



  return (
    <div className="CompanyList">
      Hola.
      <SearchForm searchFor={searchFor} />
      {currCompany === "" ? displayCompanies : <CompanyCard company={currCompany} />}
    </div>
  );
}

export default CompanyList;