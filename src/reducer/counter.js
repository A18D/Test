import {INCREMENT_COUNTER, INIT_COUNTER} from '../constants'

export default (count = 0, action) => {
    const {type} = action

    switch (type) {
        case INCREMENT_COUNTER: return count + 1
        case INIT_COUNTER: return 0
    }

    return count
}