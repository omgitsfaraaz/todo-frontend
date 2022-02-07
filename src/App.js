import React, { useState, useEffect } from "react";
import "./App.css";
import styles from "./styles.module.css";
import DummyCard from "./components/DummyCard/DummyCard";
import TaskCard from "./components/TaskCard/TaskCard";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Actions
import { createTodoModal, todosProvider } from "./redux/actions";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import EditTodo from "./components/EditTodo/EditTodo";

function App() {
  const [searchParam, setSearchParam] = useState("");

  // constants
  document.body.style = "background: lightgray;";

  // Redux
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state) => state.getTodos);
  const { loading: delTodoLoad } = useSelector((state) => state.deleteTodo);
  const { editModal, loading: editTodoLoad } = useSelector(
    (state) => state.editTodos
  );
  const { showModal, loading: createTodoLoad } = useSelector(
    (state) => state.createTodo
  );

  // useEffects
  useEffect(() => {
    dispatch(todosProvider());
  }, [delTodoLoad, createTodoLoad, editTodoLoad]);

  const showTodos = () => {
    if (searchParam) {
      const myRes = todos.filter((data) => {
        return data.title.toLowerCase().includes(searchParam.toLowerCase());
      });
      console.log("result ===>", myRes);
      return myRes.length ? (
        myRes.map((data) => (
          <TaskCard
            key={data.id}
            title={data.title}
            todoId={data.id}
            completed={data.completed}
          />
        ))
      ) : (
        <h1>No data found</h1>
      );
    } else {
      return (
        todos &&
        todos.map((data) => (
          <TaskCard
            key={data.id}
            title={data.title}
            todoId={data.id}
            completed={data.completed}
          />
        ))
      );
    }
  };

  return (
    <div className={styles.mainDiv}>
      <div
        className={styles.addTodo}
        onClick={() => dispatch(createTodoModal(true))}
      >
        <span className={styles.plus}>+</span>
      </div>
      <h1 className={styles.mainHead}>Welcome to Tasks!</h1>
      <div className={styles.welcome}>
        <DummyCard title="Welcome to tasks!" />
        <DummyCard title="Here you can add text" />
        <DummyCard title="To edit a task, tap the title" />
        <DummyCard title="Available for web, Android, iOS" />
        <DummyCard title="However, this is a Beta version" />
      </div>

      <div>
        <h1 className={styles.mainHead}>Your tasks</h1>
        <div className={styles.inputDiv}>
          <input
            placeholder="search..."
            className={styles.searchInput}
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </div>
        {loading ? (
          <h1 className={styles.mainHead}>Loading...</h1>
        ) : (
          <div className={styles.welcome}>
            {todos.length == 0 ? <h5>No tasks for now</h5> : showTodos()}
          </div>
        )}
      </div>

      {showModal ? <CreateTodo /> : <div />}
      {editModal ? <EditTodo /> : <div />}
    </div>
  );
}

export default App;
