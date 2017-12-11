const initState = {
    count: 0
};

export const ADD_HOME_COUNT = 'ADD_HOME_COUNT';
export const REDUCE_HOME_COUNT = 'REDUCE_HOME_COUNT';

export const addCount = () => {
    return {
        type: ADD_HOME_COUNT
    }
}

export const reduceCount = () => {
    return {
        type: REDUCE_HOME_COUNT
    }
}

export function reducer(state=initState, action) {
    switch(action.type) {
        case ADD_HOME_COUNT:
            return {
                ...state,
                count: ++state.count
            }
        case REDUCE_HOME_COUNT:
        return {
            ...state,
            count: --state.count
        }
        default:
            return {...state};
    }
}   