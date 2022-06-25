import { useImagesContext } from '@/hooks/useImagesContext'
import Title from '@/components/atoms/Title'
import Picture from '@/components/molecules/Picture'
import Infinite from '@/components/molecules/Infinite'
import EndMessage from '@/components/molecules/EndMessage'
import Loader from '@/components/molecules/Loader'
import styled from 'styled-components'

const Main = styled.main`
  padding: 1rem;
`

const Pictures = () => {
  const { 
    images, 
    onNextPage, 
    hasMore, 
    isLoading,
    searched,
    last_search
  } = useImagesContext()

  return (
    <Main>
      {
        (images.length && last_search !== 'nature') &&
        <Title 
          type='h2' 
          text={!searched ? 'Last search' : `Results of ${decodeURI(searched)}`} 
          fw={600}
          fs={2}
        />
      }
      <Infinite
        data={images}
        onNextPage={onNextPage}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={<EndMessage />}
      >
        {
          !isLoading && (
            images?.map((image) => (
              <Picture 
                key={image.id}
                {...image} 
              />
            ))
          )
        }
      </Infinite>
    </Main>
  )
}

export default Pictures