import React, { useState, useEffect } from "react";
import "./App.css";
import styles from "./styles.module.css";
import DummyCard from "./components/DummyCard/DummyCard";
import TaskCard from "./components/TaskCard/TaskCard";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Actions
import { todosProvider } from "./redux/actions";

function App() {

  // constants
  document.body.style = "background: lightgray;";
  
  // Redux
  const dispatch = useDispatch();
  const { todos, loading } = useSelector(state => state.getTodos);
  const { loading: delTodoLoad } = useSelector(state => state.deleteTodo);

  // useEffects
  useEffect(() => {
    dispatch(todosProvider())
  }, [delTodoLoad]);

  return (
    <div className={styles.mainDiv}>
      <div className={styles.addTodo}>
        <span className={styles.plus}>+</span>
      </div>
      <h1 className={styles.mainHead}>Welcome to Tasks!</h1>
      <div className={styles.welcome}>
        <DummyCard title="Welcome to tasks!" />
        <DummyCard title="Here you can add text" />
        <DummyCard title="To edit a task, simply tap it" />
        <DummyCard title="Available for web, Android, iOS" />
        <DummyCard title="However, this is a Beta version" />
      </div>

      <div>
        <h1 className={styles.mainHead}>Your tasks</h1>
        {loading ? (
          <h1 className={styles.mainHead}>Loading...</h1>
        ) : (
          <div className={styles.welcome}>
            {todos.length == 0 ? (
              <h5>No tasks for now</h5>
            ) : (
              todos &&
              todos.map((data) => <TaskCard key={data.id} title={data.title} todoId={data.id} />)
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
