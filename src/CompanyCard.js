import React from 'react';
import './CompanyCard.css';

function CompanyCard({ company }) {
  return (
    <div className='CompanyCard'>
      <p>Name:{company.handle}</p>
      <p>Description: {company.description}</p>
    </div>
  );
}

export default CompanyCard;