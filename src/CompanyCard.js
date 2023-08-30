import React from 'react';

function CompanyCard({ company }) {
  return (
    <div>
      Name:{company.handle}
      Description: {company.description}
    </div>
  );
}

export default CompanyCard;