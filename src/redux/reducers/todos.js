import todoTypes from "../actions/todoTypes";

const todosReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case todoTypes.ADD_TODO:
            return [...state, payload];

        case todoTypes.REMOVE_TODO:
            return state.filter((item) => item.id !== payload.id);

        default:
            return state;
    }
}

export default todosReducer;