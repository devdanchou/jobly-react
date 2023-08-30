import React from 'react';
import JobCardList from './JobCardList';

function CompanyDetails() {

  // const { handle } = useParams()
  // const [company, setCompany] = useState({})

  //  async function getACompany(){
  //    const company = await getCompany(handle)
  //  set setCompany(company)
  //}

  // dummy company
  const company =
  {
    id: 1,
    handle: 'A',
    description: ' I am A',
    jobs: [{ id: 1, title: 'SE' }, { id: 2, title: 'front desk' }]
  };


  return (
    <div className="CompanyDetails">
      <p>Name:{company.handle}</p>
      <p>Description: {company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetails;