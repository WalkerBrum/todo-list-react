import styles from './InfoTasks.module.css';

export const InfoTasks = () => {

  return (
    <section className={styles.wrapper}>
      <div className={styles.createTasks}>
        <h4>Tarefas criadas</h4>
        <span className={styles.numberTasks}>0</span>
      </div>
      <div className={styles.completedTasks}>
        <h4>Concluídas</h4>
        <span className={styles.numberTasks}>0</span>
      </div>
    </section>
  )
}