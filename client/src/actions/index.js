import axios from 'axios';

import {
    ADD_WAIT_LIST
} from './types'


export function addWaitList(values, callback) {
    const request = axios.post('https://api.propbook.com.au/waitlist', values)
        .then(() => callback());
    return {
        type: ADD_WAIT_LIST,
        payload: request
    }

}