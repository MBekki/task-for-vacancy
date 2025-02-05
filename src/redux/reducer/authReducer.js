import { CLEAR_TOKEN, SET_TOKEN } from "../actionType";

const token = localStorage.getItem('token');

const initalState = {
    token: token ? token : null,
}

const authReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case SET_TOKEN:
            return {
                ...state,
                token: payload
            }
        case CLEAR_TOKEN:
            return {}
        default:
            return state
    }
}

export default authReducer