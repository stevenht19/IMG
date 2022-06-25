import GridCenter from '@/components/atoms/GridCenter'
import Circle from '@/components/atoms/Circle'
import styled from 'styled-components'

const CircleStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const Loader = ({ isGrid = true }) => {
  return isGrid ?
  <GridCenter>
    <CircleStyled>
      {
        [0.9, 0.8, 0.7].map((i) => (
          <Circle time={i} key={i} />
        ))
      }
    </CircleStyled>
  </GridCenter>
  :
  <CircleStyled>
    {
      [0.9, 0.8, 0.7].map((i) => (
        <Circle time={i} key={i} />
      ))
    }
  </CircleStyled>
}

export default Loader