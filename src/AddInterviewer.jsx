import React, { useCallback, useRef } from 'react';

const AddInterviewerForm = ({
  addInterviewer,
}) => {
  const nameRef = useRef(null);
  const subjectRef = useRef(null);
  
  const handleSubmit = useCallback(e => {
    e.preventDefault(); 
    addInterviewer(
      nameRef.current.value,
      subjectRef.current.value,
    );
    //e.target.reset();
  }, [nameRef, subjectRef, addInterviewer]);
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <span>Name:</span>
        <input id="name" type="text" ref={nameRef} />
      </label>

      <label htmlFor="course">
        <span>Subject:</span>
        <input id="course" type="text" ref={subjectRef} />
      </label>
      
      <button type="submit">Add Interviewer</button>
    </form>
   );
};

export default AddInterviewerForm;