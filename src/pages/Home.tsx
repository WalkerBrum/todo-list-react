
import { AddTasks } from '../components/AddTasks';
import { InfoTasks } from '../components/InfoTasks';
import { WithoutTasks } from '../components/WithoutTasks';

import { Tasks } from '../components/Tasks';
import { AppContext } from '../contexts/AppContext';
import { useContext } from 'react';

export const Home = () => {
  const context = useContext(AppContext)
  const haveTask = context.tasks.length > 0

  return (
    <main>
      <AddTasks />
      <InfoTasks />

      {
        haveTask
          ? 
        context.tasks.map(task => (
          <Tasks task={task} key={task} /> 
        ))
          : 
        <WithoutTasks />
      }

    </main>
  )
}