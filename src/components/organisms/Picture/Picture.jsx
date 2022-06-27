import Image from '@/components/atoms/Image'
import styled from 'styled-components'

const Section = styled.section`
  @media screen and (min-width: 1200px) {
    min-height: 100vh; 
  }
`

const Picture = ({ image }) => {
  return (
    <Section>
      <Image 
        url={image?.url} 
        alt={image?.tags} 
      />
    </Section>
  )
}

export default Picture