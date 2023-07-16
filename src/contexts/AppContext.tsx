import { createContext, useState, ReactNode } from 'react';

import { getLocalStorage } from '../utils/getLocalStorage';

export interface ITasksProps {
  id: number;
  task: string;
  check: boolean;
}

interface IAppContext {
  tasks: ITasksProps[];
  setTasks: (task: ITasksProps[]) => void;
  amountTasksCompleted: number;
  setAmountTasksCompleted: (amount: number) => void;
}

interface Props {
  children: ReactNode;
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: Props) => {
  const tasksLocalStorage = getLocalStorage()
  
  const [tasks, setTasks] = useState<ITasksProps[]>(tasksLocalStorage)
  const [amountTasksCompleted, setAmountTasksCompleted] = useState(0)

  return (
    <AppContext.Provider value={{ tasks, setTasks, amountTasksCompleted, setAmountTasksCompleted }}>
      { children }
    </AppContext.Provider>
  )
}