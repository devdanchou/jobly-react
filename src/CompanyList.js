import React from 'react';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';


function CompanyList() {

  //  const [companies, setCompanies] = useState([])
  //
  //  async function getCompaniesList(){
  //    const companies = await getCompanies()
  //  set setCompanies(companies)
  //}


  // dummy companies
  const companies = [
    {
      id: 1,
      handle: 'A',
      description: ' I am A',
    },
    {
      id: 2,
      handle: 'B',
      description: 'I am B',
    }];

  // dummy function
  function searchFor() {

  }

  return (
    <div className="CompanyList">
      Hola.
      <SearchForm searchFor={searchFor} />
      {companies.map(company =>
        <Link key={company.id} to={`/companies/${company.handle}`}>
          <CompanyCard company={company} />
        </Link>)}


    </div>
  );
}

export default CompanyList;