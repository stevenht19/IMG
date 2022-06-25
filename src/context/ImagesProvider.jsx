import { useReducer, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { galleryReducer } from '@/reducers/galleryReducer'
import { getImages } from '@/services/getImages.service'
import { ImagesContext } from '@/context'
import { localStorage } from '@/utils/localStorage'

const initialState = {
  page: 1,
  images: [],
  hasMore: true,
  totalHits: 0,
  per_page: 0,
  isLoading: true,
  last_search: 'nature'
}

const ImagesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(galleryReducer, initialState) 
  
  const { search } = useLocation()
  const searched  = search?.length ? search.substring(3) : null
  const searched_term = 
    searched || localStorage('get', 'searched') || 'nature'

  useEffect(() => {
    if (state.last_searched !== searched_term) {
      getImages(searched_term, state.page)
        .then(res => {
          localStorage('set', 'searched', searched_term)
          dispatch({
            type: 'GET_IMAGES',
            payload: {
              ...res,
              searched_term
            }
          })
        })
    }
  }, [searched_term])

  const onNextPage = () => {
    if (!state.hasMore) return
    getImages(searched_term, state.page + 1)
      .then(res => dispatch({
        type: 'CONCAT_IMAGES',
        payload: res
      }))
  }

  const onResetPage = () => {
    dispatch({
      type: 'RESET_PAGE'
    })
  }

  return (
    <ImagesContext.Provider
      value={{
        ...state,
        searched,
        onNextPage,
        onResetPage
      }}
    >
      {children}
    </ImagesContext.Provider>
  )
}

export default ImagesProvider