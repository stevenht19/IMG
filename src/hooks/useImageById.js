import { useEffect, useState } from 'react'
import { getImages } from '@/services/getImages.service'

export const useSimilarImages = (tag = '') => {
  const [similarImages, setSimilarImages] = useState({})
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (!tag) return
    const getSimilarImages = () => {
      getImages(tag, 1)
        .then(setSimilarImages)
      setLoading(false)
    } 
    getSimilarImages()
  }, [tag])

  return {
    isLoading,
    similarImages
  }
}


