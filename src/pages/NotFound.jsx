import Title from '@/components/atoms/Title'
import Text from '@/components/atoms/Text'
import styled from 'styled-components'

const FlexScreen = styled.div`
  display: grid;
  place-content: center;
  min-height: 100vh;
`

const NotFound = () => {
  return (
    <FlexScreen>
      <Title 
        type='h1' 
        text='Not Found 404' 
      />
      <Text text='The URL you´re trying to visit is not valid :(' />
    </FlexScreen>
  )
}

export default NotFound