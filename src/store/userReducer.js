import { LOGIN_USER, LOGOUT_USER, REG_USER } from "./actions"

const initialState = {
    mail: null,
    pass: null,
    name: null,
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                mail: action.mail,
                pass: action.pass,
            }
        case LOGOUT_USER:
            return {
                ...state,
                mail: null,
                pass: null,
                name: null,
            }
        case REG_USER:
            return {
                ...state,
                mail: action.mail,
                pass: action.pass,
                name: action.name,
            }
        default:
            return state
    }
}