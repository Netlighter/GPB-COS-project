import { combineReducers } from 'redux';
import details from './detailsReducer';
import services from './serviceReducer';

export default combineReducers({
  details,
  services,
});
