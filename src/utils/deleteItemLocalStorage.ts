export const deleteItemLocalStorage = (task: string[]) => {
  localStorage.clear()
  localStorage.setItem('tasks', JSON.stringify(task))
}