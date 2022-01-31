import { combineReducers } from "redux";
import createTodoReducer from "./reducers/createTodoReducer";
import deleteTodoReducer from "./reducers/deleteTodoReducer";
import getTodosReducer from "./reducers/getTodosReducer";

const rootReducer = combineReducers({
    getTodos: getTodosReducer,
    deleteTodo: deleteTodoReducer,
    createTodo: createTodoReducer
})

export default rootReducer;