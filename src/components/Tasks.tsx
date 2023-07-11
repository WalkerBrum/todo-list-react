import { Trash } from 'phosphor-react';

import styles from './Tasks.module.css';

export const Tasks = () => {

  return (
    <article className={styles.wrapperTasks}>
      <label className={styles.container}>
        <input type="checkbox"/>
        <span className={styles.check} />
      </label>
      <p className={styles.task}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <Trash className={styles.trash} />
    </article>
  )
}