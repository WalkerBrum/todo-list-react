import { PlusCircle } from 'phosphor-react';

import styles from './AddTasks.module.css';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';

export const AddTasks = () => {
  const [newTask, setNewTask] = useState('')

  const context = useContext(AppContext)
  const isNewTaksEmpty = newTask.length < 5

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault()

    context.setTasks([...context.tasks, newTask])

    setNewTask('')
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleCreateNewTask(event)
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <input
          className={styles.tasks}
          name="tasks" 
          type="text"
          value={newTask} 
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          onKeyDown={handleKeyDown}
        />
        <button 
          className={styles.addTasks} 
          type="submit"
          onClick={handleCreateNewTask}
          disabled={isNewTaksEmpty}
        >
          Criar
          <PlusCircle />
        </button>
      </div>
      <div className={styles.message}>
        {isNewTaksEmpty && (
          <span>Uma tarefa deve ter pelo o menos 5 caracters</span>
        )}
      </div>
    </>
  )
}