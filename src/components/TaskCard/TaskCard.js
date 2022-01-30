import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoProvider, todosProvider } from '../../redux/actions';
import styles from './styles.module.css';

const TaskCard = ({ title, todoId }) => {
  // Redux
  const dispatch = useDispatch();

  return (
      <div className={styles.mainDiv}>
        <input type="checkbox"></input>
        <p className={styles.taskTitle}>{title}</p>
        <h1 className={styles.delete} onClick={() => {
          console.log('delete this', todoId)
          dispatch(deleteTodoProvider({
            id: todoId
          }))
        }}>x</h1>
      </div>
  )
}

export default TaskCard;
