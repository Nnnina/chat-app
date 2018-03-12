//Integrate different reducers into one, map state to reducers

import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

//ES6 equlas to ES2015
// const todpApp = combineReudcers({
//      todos: todos,
//      visibilityFilter: visibilityFilter
// });
const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp;
