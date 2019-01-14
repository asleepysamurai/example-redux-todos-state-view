import { actions as todos } from './todos';
import { actions as visibilityFilter } from './visibilityFilter';

const actions = Object.assign({}, todos, visibilityFilter);

export default actions;
