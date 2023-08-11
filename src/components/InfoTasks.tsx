import { useContext, useEffect } from 'react';

import { AppContext } from '../contexts/AppContext';

import styles from './InfoTasks.module.css';

export const InfoTasks = () => {
  const context = useContext(AppContext)
  const amountTasks = context.tasks.length

  useEffect(() => {
    let amountTaskCompleted = 0

    context.tasks.forEach(InfoTasks => {
      if (InfoTasks.check === true) { 
        amountTaskCompleted += 1
        console.log(amountTaskCompleted)
      }
    })

    context.setAmountTasksCompleted(amountTaskCompleted)
  }, [context.tasks])
  
  return (
    <section className={styles.wrapper}>
      <div className={styles.createTasks}>
        <h4>Tarefas criadas</h4>
        <span className={styles.numberTasks}>{amountTasks}</span>
      </div>
      <div className={styles.completedTasks}>
        <h4>Concluídas</h4>
        <span className={styles.numberTasks}>{context.amountTasksCompleted} de {amountTasks}</span>
      </div>
    </section>
  )
}