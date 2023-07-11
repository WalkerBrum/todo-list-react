
import { AddTasks } from './components/AddTasks';
import { Header } from './components/Header';
import { InfoTasks } from './components/InfoTasks';
import { WithoutTasks } from './components/WithoutTasks';

import './global.css';
import styles from './App.module.css';
import { Tasks } from './components/Tasks';

export const App = () => {
  const tasks = true;

  return (
    <>
      <Header />

      <main className={styles.main}>
        <AddTasks />
        <InfoTasks />

        {tasks ? <Tasks /> : <WithoutTasks />}
        <Tasks />
        <Tasks />
      </main>
    </>
  )
}

export default App
