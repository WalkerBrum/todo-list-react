import { ITasksProps } from "../contexts/AppContext";

export const updateLocalStorage = (data: ITasksProps[]) => {
  localStorage.clear();

  localStorage.setItem('tasks', JSON.stringify(data))
}