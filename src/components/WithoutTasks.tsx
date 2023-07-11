import { ClipboardText } from 'phosphor-react';

import styles from './WithoutTasks.module.css';

export const WithoutTasks = () => {

  return (
    <article className={styles.wrapperEmptyTasks}>
      <ClipboardText size={56} className={styles.clipboard}/>
      <h3 className={styles.firstInfo}>Você ainda não tem tarefas cadastradas</h3>
      <h3 className={styles.secondInfo}>Crie tarefas e organize seus itens a fazer</h3>
    </article>
  )
}