import { PlusCircle } from 'phosphor-react';

import styles from './AddTasks.module.css';

export const AddTasks = () => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.tasks}
        name='tasks' 
        type="text" 
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.addTasks} type="submit">
        Criar
        <PlusCircle />
      </button>
    </div>
  )
}