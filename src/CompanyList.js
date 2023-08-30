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
 * State: none atm
 *
 * RouteList -> CompanyList -> {CompanyCard, SearchForm}
 */


function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [currCompany, setCurrCompany] = useState("");

  console.log("in CompanyList and companies = ", companies);

  useEffect(function fetchCompanies() {
    async function getCompanies() {
      const newCompanies = await JoblyApi.getCompanies();

      console.log("this is newCompanies ==>", newCompanies);

      setCompanies(newCompanies);
    }
    getCompanies();
  }, []);



  //
  //  async function getCompaniesList(){
  //    const companies = await getCompanies()
  //  set setCompanies(companies)
  //}


  // dummy companies
  // const companies = [
  //   {
  //     id: 1,
  //     handle: 'A',
  //     description: ' I am A',
  //   },
  //   {
  //     id: 2,
  //     handle: 'B',
  //     description: 'I am B',
  //   }];

  // dummy function

  async function searchFor(handle) {
    const searchCompany = await JoblyApi.getCompany(handle);
    setCurrCompany(searchCompany);
  }


  const displayCompanies =
    companies.map(company =>
      <Link key={company.handle} to={`/companies/${company.handle}`}>
        <CompanyCard company={company} />
      </Link>);

  return (
    <div className="CompanyList">
      Hola.
      <SearchForm searchFor={searchFor} />
      {currCompany === "" ? displayCompanies : <CompanyCard company={currCompany} />}
    </div>
  );
}

export default CompanyList;