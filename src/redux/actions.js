import axios from "axios";
import { 
  CREATE_TODO_FAILURE,
  CREATE_TODO_LOADING,
    CREATE_TODO_MODAL,
    CREATE_TODO_SUCCESS,
    DELETE_TODO_FAILURE,
    DELETE_TODO_LOADING,
    DELETE_TODO_SUCCESS,
    GET_TODOS_FAILURE, 
    GET_TODOS_LOADING, 
    GET_TODOS_SUCCESS 
} from "./actionTypes"

const devUrl = "http://localhost:3001";

// GET TODOS
const getTodosLoading = () => {
    return {
        type: GET_TODOS_LOADING
    }
}

const getTodosSuccess = (data) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: data
    }
}

const getTodosFailure = (error) => {
    return {
        type: GET_TODOS_FAILURE,
        payload: error
    }
}

export const todosProvider = () => {
    return (dispatch) => {
      dispatch(getTodosLoading())
      const config = {
        method: "get",
        url: `${devUrl}/api/todos`,
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config)
        .then(response => {
          dispatch(getTodosSuccess(response.data.data.todos));
        })
        .catch(err => {
          dispatch(getTodosFailure(err));
        })
    }
  }

// DELETE TODOS
const deleteTodoLoading = () => {
    return {
        type: DELETE_TODO_LOADING
    }
}

const deleteTodoSuccess = (data) => {
    return {
        type: DELETE_TODO_SUCCESS,
        payload: data
    }
}

const deleteTodoFailure = (error) => {
    return {
        type: DELETE_TODO_FAILURE,
        payload: error
    }
}

export const deleteTodoProvider = (data) => {
  console.log('inside deleteTodoProvider');
  return (dispatch) => {
    dispatch(deleteTodoLoading())
    const config = {
      method: "post",
      url: `${devUrl}/api/delete-todo`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data
    };
    axios(config)
      .then(response => {
        dispatch(deleteTodoSuccess(response.data.data.todo));
      })
      .catch(err => {
        dispatch(deleteTodoFailure(err));
      })
  }
}

// CREATE TODOS
const createTodoLoading = () => {
  return {
    type: CREATE_TODO_LOADING
  }
}

const createTodoSuccess = (data) => {
  return {
    type: CREATE_TODO_SUCCESS,
    payload: data
  }
}

const createTodoFailure = (error) => {
  return {
    type: CREATE_TODO_FAILURE,
    payload: error
  }
}

export const createTodoModal = data => {
  return {
    type: CREATE_TODO_MODAL,
    payload: data
  }
}

export const createTodoProvider = (data) => {
  return (dispatch) => {
    dispatch(createTodoLoading())
    const config = {
      method: "post",
      url: `${devUrl}/api/todos`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data
    };
    axios(config)
      .then(response => {
        dispatch(createTodoSuccess(response.data.data.todo));
      })
      .catch(err => {
        dispatch(createTodoFailure(err));
      })
  }
}
  