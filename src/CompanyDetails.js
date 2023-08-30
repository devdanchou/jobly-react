import React from 'react';
import JobCardList from './JobCardList';

function CompanyDetails({ company }) {
  return (
    <div className="CompanyDetails">
      Name:{company.handle}
      Description: {company.description}
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetails;