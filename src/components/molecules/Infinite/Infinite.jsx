import InfiniteScroll from 'react-infinite-scroll-component';
import GridList from '@/components/atoms/GridList';

const Infinite = ({
  data,
  onNextPage,
  hasMore,
  children,
  loader,
  endMessage,
  isLoading
}) => {
  return (
    <InfiniteScroll
      dataLength={data.length}
      hasMore={hasMore}
      next={onNextPage}
      {...(!isLoading ? { loader: loader } : {})}
      endMessage={endMessage}
      scrollThreshold={'200px'}
      style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <GridList>
        {children}
      </GridList>
    </InfiniteScroll>
  )
}

export default Infinite