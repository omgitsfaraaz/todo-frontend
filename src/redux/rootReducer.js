import { combineReducers } from "redux";
import createTodoReducer from "./reducers/createTodoReducer";
import deleteTodoReducer from "./reducers/deleteTodoReducer";
import editTodosReducer from "./reducers/editTodoReducer";
import getTodosReducer from "./reducers/getTodosReducer";

const rootReducer = combineReducers({
    getTodos: getTodosReducer,
    deleteTodo: deleteTodoReducer,
    createTodo: createTodoReducer,
    editTodos: editTodosReducer
})

export default rootReducer;