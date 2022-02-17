import { combineReducers } from "redux";
import todosReducer from "./todos";
import userReducer from "./user";

const globalReducers = combineReducers({
    todos: todosReducer,
    user: userReducer,
});

export default globalReducers;