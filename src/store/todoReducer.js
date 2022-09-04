import { ADD_TODO, DELETE_TODO, ADD_ID, IMPORT_TODOS, DELETE_ID } from "./actions"

const initialState = {
    todos: [],
    todoID: [],
}

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter((todo) => todo !== action.payload)]
            }
        case ADD_ID:
            return {
                ...state,
                todoID: [...state.todoID, action.payload]
            }
        case DELETE_ID:
            return {
                ...state,
                todoID: [...state.todoID.filter((deleteID) => deleteID !== action.key)]
            }
        case IMPORT_TODOS:
            return {
                ...state
            }
        default:
            return state
    }
}