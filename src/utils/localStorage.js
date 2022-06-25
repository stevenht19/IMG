export const localStorage = (method, entrie, arg) => {
  if (method === 'get') {
    return window.localStorage.getItem(entrie)
  } else if (method === 'set_obj') {
    window.localStorage.setItem(entrie, JSON.stringify(arg))
  } else if (method === 'get_obj') {
    return JSON.parse(window.localStorage.getItem(entrie))
  } else {
    window.localStorage.setItem(entrie, arg)
  }
}
