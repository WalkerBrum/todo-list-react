export const getLocalStorage = () => {
  const tasksSaveLocalStorage = localStorage.getItem('tasks')

  let parsedTasks: string[] = [];

  if (tasksSaveLocalStorage) {
    parsedTasks = JSON.parse(tasksSaveLocalStorage) as string[];
  }

  return parsedTasks
}