import { useContext } from 'react'
import { ImagesContext } from '@/context'

export const useImagesContext = () => {
  return useContext(ImagesContext)
}
