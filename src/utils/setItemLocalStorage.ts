import { ITasksProps } from "../contexts/AppContext"

export const setItemLocalStorage = ( data: ITasksProps[], newData: ITasksProps) => {
  localStorage.setItem('tasks', JSON.stringify([...data, newData]))
}