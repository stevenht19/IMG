const API = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_KEY}&safesearch=true`

export async function getImages(query = '', page = 1, order = 'latest') {
  return fetch(`${API}${query?.trim()?.length ? '&q='+query : ''}&page=${page}&order=${order}`)
    .then((res) => res.json())
    .catch((err) => err)
}
