import RequestSavetodo from './../requests/requestSavetodo';
import RequestDeletetodo from '../requests/requestDeletetodo';
import RequestImport from '../requests/requestImport';
import RequestLogin from '../requests/requestLogin';
import RequestLogout from '../requests/requestLogout';
import RequestReg from '../requests/requestReg';

export const DELETE_TODO = "DELETE_TODO"
export const ADD_TODO = "ADD_TODO"
export const ADD_ID = "ADD_ID"
export const DELETE_ID = "DELETE_ID"
export const IMPORT_TODOS = "IMPORT_TODOS"

export const addTodos = (todoText) => {
    return (
        RequestSavetodo(todoText),
        { type: ADD_TODO, payload: todoText }
    )
}

export const deleteTodos = (todoText) => {
    return (
        RequestDeletetodo(todoText),
        { type: DELETE_TODO, payload: todoText }
    )
}

export const addTodosID = (todoText, todoID) => {
    return (
        { type: ADD_ID, payload: todoID, key: todoText }
    )
}

export const deleteTodosID = (todoText) => {
    return (
        { type: ADD_ID, key: todoText }
    )
}

export const importTodos = () => {
    return (
        RequestImport(),
        { type: IMPORT_TODOS }
    )
}

export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const REG_USER = "REG_USER"

export const logUser = (mail, pass) => {
    return (
        RequestLogin(mail, pass),
        { type: LOGIN_USER, mail: mail, pass: pass }
    )
}

export const logoutUser = () => {
    return (
        RequestLogout(),
        { type: LOGOUT_USER }
    )
}

export const regUser = (mail, pass, name) => {
    return (
        RequestReg(name, mail, pass),
        { type: REG_USER, mail: mail, pass: pass, name: name }
    )
}