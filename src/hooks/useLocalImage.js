import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useImagesContext } from '@/hooks/useImagesContext'
import { localStorage } from '@/utils/localStorage'

export const useLocalImage = ({ name }) => {
  const { id } = useParams()
  const { images } = useImagesContext()

  const localImage = 
    images?.find(img => img?.id === Number(id)) || localStorage('get_obj', name)

  useEffect(() => {
    const setLocalImage = () => {
      localStorage('set_obj', name, localImage)
    }
    setLocalImage()
  }, [])

  return localImage
}
