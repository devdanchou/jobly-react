import React from 'react';
import './CompanyCard.css';

/** Presentational Component.
 * Provides details about a company.
 *
 * Prop: company : { handle, name, description, numEmployees, logoUrl }
 *
 * State: none
 *
 * CompanyList -> CompanyCard
 */

//TODO: destructering what we need here
function CompanyCard({ company }) {

  return (
    <div className='CompanyCard'>
      <div>
        <p>{company.name}</p>
        <p>{company.description}</p>
      </div>
      {company.logoUrl
        ? <img className='CompanyCard-img' src={company.logoUrl} alt={company.name} />
        : <img className='CompanyCard-img' src='/logos/logo1.png' alt={company.name} />
      }
    </div>
  );
}

export default CompanyCard;