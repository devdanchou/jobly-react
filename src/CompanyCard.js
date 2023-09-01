import React from 'react';
import './CompanyCard.css';

/** Presentational Component.
 * Provides details about a company.
 *
 * Prop: company : { name, description,logoUrl }
 *
 * State: none
 *
 * CompanyList -> CompanyCard
 */

//TODO: destructering what we need here  done!


function CompanyCard({ name, description, logoUrl }) {

  return (
    <div className='CompanyCard'>
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      {logoUrl
        ? <img className='CompanyCard-img' src={logoUrl} alt={name} />
        : <img className='CompanyCard-img' src='/logos/logo1.png' alt={name} />
      }
    </div>
  );
}

export default CompanyCard;