import {
    combineReducers
} from 'redux';
import {
    reducer as formReducer
} from 'redux-form';
import waitListReducer from './waitListReducer';



const rootReducer = combineReducers({
    form: formReducer,
    waitList: waitListReducer

});

export default rootReducer;