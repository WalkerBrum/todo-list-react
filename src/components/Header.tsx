import todoLogo from '../assets/images/todo-logo.svg';

import styles from './Header.module.css';

export const Header = () => {

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt='Todo Logo' />
    </header>
  )
}