import {INCREMENT_COUNTER, INIT_COUNTER} from '../constants'

export function incrementCounter() {
    return {
        type: INCREMENT_COUNTER
    }
}

export function initCounter() {
    return {
        type: INIT_COUNTER
    }
}
