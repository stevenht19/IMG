import styled from 'styled-components'

const SkeletonStyled = styled.li`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.24);
  min-height: 428px;
`

const Skeleton = () => {
  return (
    <SkeletonStyled />
  )
}

export default Skeleton