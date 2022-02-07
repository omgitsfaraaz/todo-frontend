import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  deleteTodoProvider, 
  editTodoModal, 
  editTodoProvider, 
  storeTitle, 
  storeTodoId 
} from "../../redux/actions";
import styles from "./styles.module.css";

const TaskCard = ({ title, todoId, completed }) => {
  // Redux
  const dispatch = useDispatch();

  return (
    <div className={styles.mainDiv} onClick={() => {
      // dispatch(editTodoModal(true))
      dispatch(storeTitle(title))
      dispatch(storeTodoId(todoId))
    }}>
      <input
        type="checkbox"
        checked={completed}
        onClick={() => {
          dispatch(editTodoModal(false))
          dispatch(
            editTodoProvider(todoId, { completed: completed ? false : true })
          )
        }
        }
      />
      <p className={completed ? styles.taskComplete : styles.taskTitle} onClick={() => dispatch(editTodoModal(true))}>{title}</p>
      <h1
        // style={{ backgroundColor: 'red' }}
        className={styles.delete}
        onClick={() => {
          console.log("delete this", todoId);
          dispatch(
            deleteTodoProvider({
              id: todoId,
            })
          );
          // dispatch(editTodoModal(false))
        }}
      >
        x
      </h1>
    </div>
  );
};

export default TaskCard;
