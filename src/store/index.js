import { createStore } from 'redux';
import interviewers from './interviewers';

const store = createStore(interviewers);

export default store;