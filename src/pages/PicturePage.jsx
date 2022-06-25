import { useScrollBehavior } from '@/hooks/useScrollPosition'
import { useLocalImage } from '@/hooks/useLocalImage'
import PictureTemplate from '@/components/templates/PictureTemplate'

const PicturePage = ({ 
  name = 'local_image' 
}) => {
  const image = useLocalImage({ name })

  useScrollBehavior({
    top: 0
  },[])

  return <PictureTemplate image={image} />
}

export default PicturePage