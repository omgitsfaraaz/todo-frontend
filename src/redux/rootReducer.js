import { combineReducers } from "redux";
import deleteTodoReducer from "./reducers/deleteTodoReducer";
import getTodosReducer from "./reducers/getTodosReducer";

const rootReducer = combineReducers({
    getTodos: getTodosReducer,
    deleteTodo: deleteTodoReducer
})

export default rootReducer;