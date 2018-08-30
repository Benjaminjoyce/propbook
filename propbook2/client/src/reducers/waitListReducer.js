import {
    ADD_WAIT_LIST
} from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case ADD_WAIT_LIST:
            return action.payload || false;
        default:
            return state;
    }
}