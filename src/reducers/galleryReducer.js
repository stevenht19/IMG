import { createImage } from '@/adapters/createImage'

export const galleryReducer = (state, action) => {
  const switcher = {
    'SET_LOADING': () => ({
      ...state,
      isLoading: true,
    }),
    'GET_IMAGES': () => ({
      ...state,
      images: createImage(action.payload.hits),
      totalHits: action.payload.totalHits,
      hasMore: Math.floor(
        action.payload.totalHits / action.payload.hits.length
      ) !== 1,
      per_page: action.payload.hits.length,
      isLoading: false,
      last_search: action.payload.searched_term
    }),
    'CONCAT_IMAGES': () => ({
      ...state,
      page: state.page + 1,
      images: state.images.concat(createImage(action.payload.hits)),
      hasMore: Math.floor(state.totalHits / state.per_page) !== state.page
    }),
    'RESET_PAGE': () => ({
      ...state, 
      page: 1
    })
  }
  return switcher[action?.type]() || state
}