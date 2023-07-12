import { useContext } from 'react';

import { AppContext } from '../contexts/AppContext';

import styles from './InfoTasks.module.css';

export const InfoTasks = () => {
  const context = useContext(AppContext)
  const amountTasks = context.tasks.length
  const amountTasksCompleted = context.amountTasksCompleted

  return (
    <section className={styles.wrapper}>
      <div className={styles.createTasks}>
        <h4>Tarefas criadas</h4>
        <span className={styles.numberTasks}>{amountTasks}</span>
      </div>
      <div className={styles.completedTasks}>
        <h4>Concluídas</h4>
        <span className={styles.numberTasks}>{amountTasksCompleted} de {amountTasks}</span>
      </div>
    </section>
  )
}