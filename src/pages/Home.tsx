
import { useContext } from 'react';

import { AddTasks } from '../components/AddTasks';
import { InfoTasks } from '../components/InfoTasks';
import { WithoutTasks } from '../components/WithoutTasks';
import { Tasks } from '../components/Tasks';
import { AppContext } from '../contexts/AppContext';

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
          context.tasks.map(infoTask => (
          <Tasks 
            id={infoTask.id} 
            task={infoTask.task}
            check={infoTask.check}
            key={infoTask.id} 
          /> 
        ))
          : 
        <WithoutTasks />
      }

    </main>
  )
}