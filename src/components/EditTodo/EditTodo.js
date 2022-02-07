import React, { useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Actions
import { 
  editTodoModal, 
  editTodoProvider, 
  storeTitle 
} from "../../redux/actions";
import styles from "../CreateTodo/styles.module.css";

const EditTodo = () => {
  // Redux
  const dispatch = useDispatch();
  const { title, todoId } = useSelector(state => state.editTodos)

  // functions
  const editTodoSubmit = () => {
    if (title) {
      dispatch(editTodoProvider(todoId, { title: title }));
    }
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.modalHead}>
        <h3>Edit todo</h3>
        <h3 onClick={() => dispatch(editTodoModal(false))}>x</h3>
      </div>
      <div className={styles.modalBody}>
        <input
          className={styles.todoInput}
          type="text"
          value={title}
          onChange={(e) => dispatch(storeTitle(e.target.value))}
          placeholder="Your todo..."
        />
        <button className={styles.todoBtn} onClick={editTodoSubmit}>
          Done
        </button>
      </div>
    </div>
  );
};

export default EditTodo;
