import { combineReducers } from 'redux'
import { reducers as todos } from './todos'
import { reducers as visibilityFilter } from './visibilityFilter'

const reducers = combineReducers({
    todos,
    visibilityFilter
});

export default reducers;
