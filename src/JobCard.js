import React from 'react';
import './JobCard.css';

/** Presentional Component
 * Provides details about a job.
 *
 * Prop: job
 *
 * State: none
 *
 * JobCardList -> JobCard
 */

function JobCard({ job }) {
  return (
    <div className='JobCard'>
      <p>id : {job.id}</p>
      <p>title: {job.title}</p>
    </div>
  );
}

export default JobCard;