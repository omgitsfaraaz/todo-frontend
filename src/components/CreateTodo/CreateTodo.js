import React, { useEffect, useState } from "react";
// Redux
import { useDispatch } from "react-redux";
// Action
import { createTodoModal, createTodoProvider } from "../../redux/actions";
import styles from "./styles.module.css";

const CreateTodo = () => {
  const [todoTitle, setTodoTitle] = useState("");

  // Redux
  const dispatch = useDispatch();

  // useEffects
  useEffect(() => {
    console.log("todo title", todoTitle);
  }, [todoTitle]);

  // functions
  const createTodoSubmit = () => {
    if (todoTitle) {
      dispatch(createTodoProvider({ title: todoTitle }));
    }
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.modalHead}>
        <h3>Title</h3>
        <h3 onClick={() => dispatch(createTodoModal(false))}>x</h3>
      </div>
      <div className={styles.modalBody}>
        <input
          className={styles.todoInput}
          type="text"
          onChange={(e) => setTodoTitle(e.target.value)}
          placeholder="Your todo..."
        />
        <button className={styles.todoBtn} onClick={createTodoSubmit}>
          Create Todo
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
