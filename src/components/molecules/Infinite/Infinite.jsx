import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components'

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-flow: dense;
  gap: 1rem;
  @media screen and (min-width: 1200px) {
    grid-auto-rows: minmax(10rem, auto);
    li:nth-child(2n) {
      grid-column: span 2;
      grid-row: span 2;
    }
  
    li:nth-child(2n+1) {
      grid-column: span 1;
      grid-row: span 1;
    }
  }

`
const Infinite = ({
  data,
  onNextPage,
  hasMore,
  children,
  loader,
  endMessage
}) => {
  return (
    <InfiniteScroll
      dataLength={data.length}
      hasMore={hasMore}
      next={onNextPage}
      loader={loader}
      endMessage={endMessage}
      scrollThreshold={'200px'}
      style={{
        minHeight: '100vh'
      }}
    >
      <Container>
        {children}
      </Container>
    </InfiniteScroll>
  )
}

export default Infinite