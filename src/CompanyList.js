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
 *   searchedCompanies: [{ handle, name, description, numEmployees, logoUrl },..]
 *   errors: null
 * }
 *
 * RouteList -> CompanyList -> {CompanyCard, SearchForm}
 */

//TODO:
// make data === searchedJobs =>  state: {
//     data: null,
//     isLoading: true,
//  }

// maybe [error, setError]= useState(null)

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
      // TODO: don't consider not-found as an error
      if (foundCompanies.length === 0) {
        throw new Error('Sorry, no results were found!');
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
    return (
      <div>
        <SearchForm searchFor={searchFor} />
        <b>{companies.errors.message}</b>
      </div>
    );
  }


  const displayCompanies = companies.data.map(company =>
    <Link key={company.handle} to={`/companies/${company.handle}`}>
      <CompanyCard company={company} />
    </Link>);

  //TODO: don't need this
  // const displaySearchedCompanies = companies.searchedCompanies?.map(
  //   company =>
  //     <Link key={company.handle} to={`/companies/${company.handle}`}>
  //       <CompanyCard company={company} />
  //     </Link>
  // );


  return (
    <div className="CompanyList">
      <SearchForm searchFor={searchFor} />

      {/* TODO: companies.data.length === 0
           ?<h1> Not found</h1>
           : displayCompanies
      */}
      {/* TODO:  delete the code below*/}
      {/* {companies.searchedCompanies && companies.searchedCompanies.length !== 0
        ? displaySearchedCompanies
        : displayCompanies} */}
    </div>
  );
}

export default CompanyList;