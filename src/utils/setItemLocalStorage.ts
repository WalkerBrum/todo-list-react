export const setItemLocalStorage = ( data: string[], newData: string) => {
  localStorage.setItem('tasks', JSON.stringify([...data, newData]))
}