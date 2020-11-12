import { combineReducers } from 'redux';
import user from './user_reducer';
import modal from './modal_reducer';
import colors from './colors';

const rootReducer = combineReducers({
    user,
    modal,
    colors
});

export default rootReducer;