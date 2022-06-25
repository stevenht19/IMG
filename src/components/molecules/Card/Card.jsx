import Image from '@/components/atoms/Image'
import styled from 'styled-components'

const CardStyled = styled.div`
  height: 13rem;
  @media screen and (min-width: 1200px) {
    height: 20rem; 
  }
`

const Card = ({ url }) => {
  return (
    <CardStyled>
      <Image url={url} br />
    </CardStyled>
  )
}

export default Card