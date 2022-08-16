import axios from "axios";

export const requestLogin = axios.create({
    baseURL: `https://api-nodejs-todolist.herokuapp.com/user/login`
});