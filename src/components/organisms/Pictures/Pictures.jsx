import { useImagesContext } from '@/hooks/useImagesContext'
import Title from '@/components/atoms/Title'
import Skeleton from '@/components/atoms/Skeleton'
import Picture from '@/components/molecules/Picture'
import Infinite from '@/components/molecules/Infinite'
import EndMessage from '@/components/molecules/EndMessage'
import Loader from '@/components/molecules/Loader'
import styled from 'styled-components'

const Main = styled.main`
  padding: 1rem;
`

const Pictures = () => {
  const arrayHelper = new Array(15).fill('ñ')
  const { 
    images, 
    onNextPage, 
    hasMore, 
    searched,
    isLoading,
  } = useImagesContext()

  return (
    <Main>
      {
        searched &&
        <Title 
          type='h2' 
          fw={600}
          fs={2}
          text={`Results of ${decodeURI(searched)}`} 
        />
      }
      <Infinite
        data={images}
        onNextPage={onNextPage}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={<EndMessage />}
        isLoading={isLoading}
      >
        {
          isLoading ?
          arrayHelper.map((_, i) => (
            <Skeleton key={i} />
          ))
          :
          images.map((image) => (
            <Picture 
              key={image.id} 
              {...image} 
            />
          ))
        }
      </Infinite>
    </Main>
  )
}

export default Pictures