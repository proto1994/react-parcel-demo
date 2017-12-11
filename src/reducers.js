import {combineReducers} from 'redux';
import {homeReducer} from './views/home';

const rootReducer = combineReducers({
    homeReducer
});

export default rootReducer;