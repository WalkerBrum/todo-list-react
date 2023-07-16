import { ITasksProps } from "../contexts/AppContext"

export const deleteItemLocalStorage = (task: ITasksProps[]) => {
  localStorage.clear()
  localStorage.setItem('tasks', JSON.stringify(task))
}