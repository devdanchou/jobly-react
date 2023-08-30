import React from 'react';
import './JobCard.css';

function JobCard({ job }) {
  return (
    <div className='JobCard'>
      <p>id : {job.id}</p>
      <p>title: {job.title}</p>
    </div>
  );
}

export default JobCard;