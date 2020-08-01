import { combineReducers } from 'redux';
import { reducer as notes } from './notes';
import { reducer as user } from './user';

export default combineReducers({
  notes,
  user,
});
