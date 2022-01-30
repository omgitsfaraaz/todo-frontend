import { 
    GET_TODOS_FAILURE, 
    GET_TODOS_LOADING, 
    GET_TODOS_SUCCESS 
} from "../actionTypes";


const initialState = {
    loading: false,
    todos: [],
    error: {},
}

const getTodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case GET_TODOS_SUCCESS:
            return {
                loading: false,
                todos: action.payload,
                error: {},
            }
        case GET_TODOS_FAILURE:
            return {
                loading: false,
                todos: [],
                error: action.payload,
            }
        default: return state;
    }
};

export default getTodosReducer;
