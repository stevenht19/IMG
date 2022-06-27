import Text from '@/components/atoms/Text'
import Icon from '@/components/atoms/Icon'
import styled from 'styled-components'

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.2rem;
  padding-top: 1.2rem;
  padding-bottom: 2rem;
  background-color: ${props => props.theme.footerColor};
`

const Footer = () => {
  return (
    <FooterStyled>
      <Text 
        text='Developed by stevenht19 ☕'
        fs={.9}
        fw={400}
      />
      <a href='https://github.com/stevenht19' target='_BLANK'>
        <Icon type='GITHUB' width={2} />
      </a>
    </FooterStyled>
  )
}

export default Footer