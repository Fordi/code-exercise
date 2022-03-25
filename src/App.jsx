import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';

import './App.css';
import InterviewerList from './InterviewerList';
import AddInterviewer from './AddInterviewer';
import { addInterviewer } from './store/interviewers';

export const AppComponent = ({
  interviewers,
  addInterviewer,
}) => (
  <div>
    <h1>Interviewers</h1>
    <hr />
    <AddInterviewer addInterviewer={addInterviewer} />
    <hr />
    <InterviewerList interviewer={interviewers} />
   </div>
);

const mapStateToProps = state => ({
  interviewers: state
});

const mapDispatchToProps = dispatch => ({
  addInterviewer: (...args) => dispatch(addInterviewer(...args))
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;
