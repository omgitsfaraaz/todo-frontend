import { 
    EDIT_TODO_FAILURE, 
    EDIT_TODO_LOADING, 
    EDIT_TODO_MODAL, 
    EDIT_TODO_SUCCESS, 
    STORE_TODO_ID, 
    STORE_TODO_TITLE
} from "../actionTypes";

const initialState = {
    loading: false,
    editedTodo: [],
    error: {},
    editModal: false,
    title: '',
    todoId: null
}

const editTodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_TODO_LOADING:
            return {
                ...state,
                loading: true,
            }
        case EDIT_TODO_SUCCESS:
            return {
                loading: false,
                editedTodo: action.payload,
                error: {},
            }
        case EDIT_TODO_FAILURE:
            return {
                loading: false,
                editedTodo: [],
                error: action.payload,
            }
        case EDIT_TODO_MODAL:
            return {
                ...state,
                editModal: action.payload
            }
        case STORE_TODO_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case STORE_TODO_ID:
            return {
                ...state,
                todoId: action.payload
            }
        default: return state;
    }
};

export default editTodosReducer;
