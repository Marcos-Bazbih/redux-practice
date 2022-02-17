import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import globalReducers from "./reducers";

const middlewares = [thunk];

const store = createStore(globalReducers, {
    todos: [
        {
            id: 0,
            title: "todo 1",
            isCompleted: false
        },
        {
            id: 1,
            title: "todo 2",
            isCompleted: false
        },
        {
            id: 2,
            title: "todo 3",
            isCompleted: false
        },
    ],
    user: {
        id: 1,
        name: "marcos",
        password: 123456
    }
},
    compose(applyMiddleware(...middlewares))
);

export default store;