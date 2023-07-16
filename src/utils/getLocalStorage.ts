import { ITasksProps } from "../contexts/AppContext";

export const getLocalStorage = () => {
  const tasksSaveLocalStorage = localStorage.getItem('tasks')

  let parsedTasks: ITasksProps[] = [];

  if (tasksSaveLocalStorage) {
    parsedTasks = JSON.parse(tasksSaveLocalStorage) as ITasksProps[];
  }

  return parsedTasks
}