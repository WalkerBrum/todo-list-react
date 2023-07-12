import { Trash } from 'phosphor-react';
import { useContext, useState } from 'react';

import styles from './Tasks.module.css';
import { AppContext } from '../contexts/AppContext';

interface ITasks {
  task: string
}

export const Tasks = ({ task }: ITasks) => {
  const [taskIsCompleted, setTaskIsCompleted] = useState(true)

  const context = useContext(AppContext)

  const deleteTask = (taskToDelete: string) => {
    const amountTasksCompleted = context.amountTasksCompleted
    const tasksWithoutDeleteOne = context.tasks.filter(task => task !== taskToDelete)

    context.setTasks(tasksWithoutDeleteOne)

    if (!taskIsCompleted) context.setAmountTasksCompleted(amountTasksCompleted - 1)
  }

  const completedTasks = () => {
    const amountTasksCompleted = context.amountTasksCompleted
    setTaskIsCompleted(!taskIsCompleted)

    if (taskIsCompleted) {
      return context.setAmountTasksCompleted(amountTasksCompleted + 1)
    }

    context.setAmountTasksCompleted(amountTasksCompleted - 1)
  }

  return (
    <article className={styles.wrapperTasks}>
      <label className={styles.container}>
        <input type="checkbox" onClick={completedTasks}/>
        <span className={styles.check} />
      </label>
      <p className={taskIsCompleted ? styles.task : styles.checkTask}>{task}</p>
      <button className={styles.trash} onClick={() => deleteTask(task)}>
        <Trash size={17}/>
      </button>
    </article>
  )
}