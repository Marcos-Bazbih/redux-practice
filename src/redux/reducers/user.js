const userReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case "LOGIN":
            return payload;
        default:
            return state;
    }
}

export default userReducer;