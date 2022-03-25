import React from 'react';

const Interviewer = ({
  interviewer: {
    name,
    subject,
  }
}) => (
  <p
    className="interviewer"
    style={{
      background: '#000',
    }}
  >
    {name} - {subject}
  </p>
);

export default Interviewer;
