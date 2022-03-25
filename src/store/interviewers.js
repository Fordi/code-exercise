const INITIAL_STATE = [{
	name: 'F.M. Bonnevier',
  id: 0,
	color: 'blue',
  subject: 'Comcast',
}, {
	name: 'Parth Patel',
  id: 1,
	color: 'green',
  subject: 'Javascript Patterns',  
}, {
	name: 'Kristin Everham',
  id: 2,  
	color: 'orange',
  subject: 'HTML and CSS',  
}, {
  name: 'Bryan Elliott',
  id: 3,
  color: 'purple',
  subject: 'React / Redux',  
}];

const ADD_INTERVIEWER = 'ADD_INTERVIEWER';

export const addInterviewer = (name, subject) => ({
  type: ADD_INTERVIEWER,
  payload: { name, subject },
});

const reducer = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case ADD_INTERVIEWER:
      return state.concat({
        ...payload,
        id: state.length
      });
    default:
      return state;
  }
};

export default reducer;
