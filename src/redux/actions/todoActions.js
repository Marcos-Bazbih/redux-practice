export const AddTodo = ({ id, text }) => (dispatch) => {
    const todo = { id: id, title: text, isCompleted: false };
    if (todo.title) {
        dispatch({ type: "ADD_TODO", payload: todo });
    }
}

export const RemoveTodo = (todo) => (dispatch) => {
    dispatch({ type: "REMOVE_TODO", payload: todo });
}