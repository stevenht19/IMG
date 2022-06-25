import Picture from '@/components/organisms/Picture'
import Slider from '@/components/organisms/Slider'

const PictureTemplate = ({ image }) => {
  return <>
    <Picture image={image} />
    <Slider image={image} />
  </>
}

export default PictureTemplate