import React, { useState } from 'react';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import JoblyApi from './api';
import { Link } from 'react-router-dom';

/** Presentional Component
 * Display a list of companies and search form
 *
 * Prop: none
 *
 * State: companies : {
 *   data: [ { handle, name, description, numEmployees, logoUrl }, ...],
 *   isloading:true/false,
 *   searchedCompany: { handle, name, description, numEmployees, logoUrl }
 *   errors: null
 * }
 *
 * RouteList -> CompanyList -> {CompanyCard, SearchForm}
 */

function CompanyList() {

  const [companies, setCompanies] = useState({
    data: null,
    isLoading: true,
    searchedCompanies: null,
    errors: null
  });


  console.log("in CompanyList, companies= ", companies);

  async function fetchCompanies() {

    try {
      const fetchedCompanies = await JoblyApi.getCompanies();

      console.log("CompanyList in fetchCompanies, fetchedCompanies =", fetchedCompanies);

      setCompanies({
        isLoading: false,
        data: fetchedCompanies,
        searchedCompanies: null,
        errors: null
      });

    } catch (err) {

      setCompanies({
        isLoading: false,
        data: null,
        searchedCompanies: null,
        errors: err
      });
    }
  }


  async function searchFor(name) {
    try {
      const foundCompanies = await JoblyApi.getCompanies(name);
      setCompanies({
        ...companies,
        isLoading: false,
        searchedCompanies: foundCompanies,
        errors: null
      });

      if (foundCompanies.length === 0) {
        throw new Error('No Results Found');
      }
    } catch (err) {

      setCompanies({
        ...companies,
        isLoading: false,
        searchedCompanies: null,
        errors: err
      });
    }

  }

  if (companies.isLoading) {
    fetchCompanies();
    return <h1>Loading...</h1>;
  } else if (companies.errors) {
    console.log('CompanyList error=', companies.errors);
    return <b>{companies.errors.message}</b>;
  }

  const displayCompanies = companies.data.map(company =>
    <Link key={company.handle} to={`/companies/${company.handle}`}>
      <CompanyCard company={company} />
    </Link>);

  const displaySearchedCompanies = companies.searchedCompanies?.map(
    company =>
      <Link key={company.handle} to={`/companies/${company.handle}`}>
        <CompanyCard company={company} />
      </Link>
  );


  return (
    <div className="CompanyList">
      <SearchForm searchFor={searchFor} />
      {companies.searchedCompanies && companies.searchedCompanies.length !== 0
        ? displaySearchedCompanies
        : displayCompanies}
    </div>
  );
}

export default CompanyList;