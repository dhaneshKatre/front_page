import { combineReducers } from 'redux';
import FormReducer from './reducer_form';

const rootReducer = combineReducers({
    form: FormReducer
});
  
export default rootReducer;
