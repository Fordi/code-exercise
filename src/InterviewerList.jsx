import React from 'react';
import Interviewer from './Interviewer';

export default ({ interviewers = [] }) => (
  <ul className="interviewer-list">
    {interviewers.map((interviewer) => (
      <li key={interviewer.id}>
        <Interviewer interviewer={interviewer} />
      </li>
    ))}
  </ul>     
);
