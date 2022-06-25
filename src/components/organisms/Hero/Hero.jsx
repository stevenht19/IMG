import Title from '@/components/atoms/Title'
import Searcher from '@/components/molecules/Searcher'
import styled from 'styled-components'

const HeroStyled = styled.section`
  display: grid;
  place-content: center;
  min-height: 35vh;
  margin-bottom: 3rem;
  padding: 2rem;
  border-radius: 0 0 1rem 1rem;
`

const Hero = () => {
  return (
    <HeroStyled>
      <Title 
        fs={3.3}
        type='h2' 
        text='What are you looking for ?' 
        gradient
      />
      <Searcher />
    </HeroStyled>
  )
}

export default Hero