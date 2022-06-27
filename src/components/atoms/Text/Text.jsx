import styled from 'styled-components'

const Paragraph = styled.p`
  color: ${props => props.theme.textColor};
  ${props => props.fs && `font-size: ${props.fs}rem`};
  ${props => props.centered && 'text-align: center'};
  ${props => props.p && `padding: ${props.p}rem`};
  ${props => props.fw && `font-weight: ${props.fw}`};
`

const Text = ({ 
  text = '',
  p = 0, 
  centered = false,
  fs,
  fw
}) => {
  return (
    <Paragraph 
      p={p}
      fs={fs} 
      fw={fw}
      centered={centered}
    >
      {text}
    </Paragraph>
  )
}

export default Text