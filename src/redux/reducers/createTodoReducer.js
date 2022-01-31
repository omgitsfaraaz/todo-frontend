import { CREATE_TODO_FAILURE, CREATE_TODO_LOADING, CREATE_TODO_MODAL, CREATE_TODO_SUCCESS } from "../actionTypes";


const initialState = {
    loading: false,
    createdTodo: [],
    error: {},
    showModal: false,
}

const createTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TODO_LOADING:
            return {
                ...state,
                loading: true,
            }
        case CREATE_TODO_SUCCESS:
            return {
                loading: false,
                createdTodo: action.payload,
                error: {},
            }
        case CREATE_TODO_FAILURE:
            return {
                loading: false,
                createdTodo: [],
                error: action.payload,
            }
        case CREATE_TODO_MODAL:
            return {
                ...state,
                showModal: action.payload
            }
        default: return state;
    }
};

export default createTodoReducer;
