import React from 'react';
import './CompanyCard.css';

/** Presentational Component.
 * Provides details about a company.
 *
 * Prop: company
 * TODO: example of company
 *
 * State: none
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  return (
    <div className='CompanyCard'>
      <p>Name:{company.handle}</p>
      <p>Description: {company.description}</p>
    </div>
  );
}

export default CompanyCard;