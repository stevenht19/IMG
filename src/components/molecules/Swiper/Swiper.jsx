import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';
import { createImage } from '@/adapters/createImage'
import Card from '@/components/molecules/Card';
import 'swiper/css'
import 'swiper/css/navigation'

const SwiperMolecule = ({ images = [] }) => {
  const hits = images?.hits ?? []
  return (
    <Swiper  
      modules={[Navigation]}
      breakpoints={{
        346: {
          slidesPerView: 2
        },
        800: {
          slidesPerView: 3
        }
      }}
      navigation
      spaceBetween={25}
    >
      {
        createImage(hits)?.map(({ id, url, tags }) => (
          <SwiperSlide key={id}>
            <Card url={url} tags={tags} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default SwiperMolecule