import { Trash } from 'phosphor-react';
import { useContext, useState } from 'react';

import { AppContext } from '../contexts/AppContext';
import { deleteItemLocalStorage } from '../utils/deleteItemLocalStorage';
import { updateLocalStorage } from '../utils/updateLocalStorage';

import styles from './Tasks.module.css';

interface ITasks {
  id: number;
  task: string;
  check: boolean;
}

export const Tasks = (props: ITasks) => {
  const { id, task } = props
  
  const context = useContext(AppContext)

  const [taskIsCompleted, setTaskIsCompleted] = useState(context.tasks[id-1].check)

  const deleteTask = (taskToDelete: number) => {
    const tasksWithoutDeleteOne = context.tasks.filter(infoTasks => infoTasks.id !== taskToDelete)

    context.setTasks(tasksWithoutDeleteOne)
    deleteItemLocalStorage(tasksWithoutDeleteOne)

    context.setAmountTasksCompleted(context.amountTasksCompleted - 1)
  }

  const completedTasks = (idTaskToUpdate: number) => {
    context.tasks.map(infoTasks => {
      if (infoTasks.id === idTaskToUpdate) {
        infoTasks.check = !taskIsCompleted

        setTaskIsCompleted(infoTasks.check)
      }
      
      if (!taskIsCompleted) {
        context.setAmountTasksCompleted(context.amountTasksCompleted + 1)
      } else {
        context.setAmountTasksCompleted(context.amountTasksCompleted - 1)
      }
    })

    updateLocalStorage(context.tasks)
  }

  return (
    <article className={styles.wrapperTasks}>
      <label className={styles.container}>
        <input type="checkbox" className={taskIsCompleted ? styles.inputChecked : ''} onClick={() => completedTasks(id)}/>
        <span className={styles.check} />
      </label>
      <p className={!taskIsCompleted ? styles.task : styles.checkTask}>{task}</p>
      <button className={styles.trash} onClick={() => deleteTask(id)}>
        <Trash size={17}/>
      </button>
    </article>
  )
}