import { useSimilarImages } from '@/hooks/useImageById'
import Swiper from '@/components/molecules/Swiper'
import Loader from '@/components/molecules/Loader'
import Title from '@/components/atoms/Title';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';

const SwiperContainer = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  user-select: none;
`

const Slider = ({ image }) => {
  const firstTag = image?.tags?.split(',')[0]
  const { isLoading, similarImages } = useSimilarImages(firstTag)

  return (
    <SwiperContainer>
      <Title 
        type='h2' 
        text='Similar Images' 
        fw={700} 
        fs={1.7} 
      />
      {
        isLoading ? 
        <Loader isGrid={false} />
        :
        <Swiper images={similarImages} />
      }
    </SwiperContainer>
  )
}

export default Slider