import * as React from 'react';
import Interviewer from './Interviewer';

const InterviewerList = ({ interviewers = [] }) => (
  <ul className="interviewer-list">
    {interviewers.map((interviewer) => (
      <li key={interviewer.id}>
        <Interviewer interviewer={interviewer} />
      </li>
    ))}
  </ul>     
);

export default InterviewerList;