import { DELETE_TODO_FAILURE, DELETE_TODO_LOADING, DELETE_TODO_SUCCESS } from "../actionTypes";


const initialState = {
    loading: false,
    deletedTodo: [],
    error: {},
}

const deleteTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TODO_LOADING:
            return {
                ...state,
                loading: true,
            }
        case DELETE_TODO_SUCCESS:
            return {
                loading: false,
                deletedTodo: action.payload,
                error: {},
            }
        case DELETE_TODO_FAILURE:
            return {
                loading: false,
                deletedTodo: [],
                error: action.payload,
            }
        default: return state;
    }
};

export default deleteTodoReducer;
