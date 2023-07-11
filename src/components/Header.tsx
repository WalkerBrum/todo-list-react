import styles from './Header.module.css';

import todoLogo from '../assets/todo-logo.svg';

export const Header = () => {

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt='Todo Logo' />
    </header>
  )
}