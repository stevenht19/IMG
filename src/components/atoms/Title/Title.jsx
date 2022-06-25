import styled, { css } from 'styled-components'

const Titleh1 = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => `clamp(${props.fs < 1 ? props.fs - 1 : 1.5}rem, 10vw, ${props.fs}rem)`};
`
const Titleh2 = styled.h2`
  margin: 0;
  font-weight: ${props => props.fw || 800};
  padding-bottom: 2rem;
  ${props => props.gradient ? css`
      background-image: 
        linear-gradient(60deg, ${props => props.theme.title}, ${props => props.theme.blueGradient});
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `
    : `color: ${props.theme.textColor};`
  }
  font-size: ${(props) => `clamp(1.6rem, 10vw, ${props.fs}rem)`};
`
const Titleh3 = styled.h3`
  color: ${props => props.theme.textColor};
  margin: 0;
  font-size: ${(props) => `clamp(1rem, 10vw, ${props.fs}rem)`};
  font-weight: ${props => props.fw || 500};
`

const Title = ({ 
  type, 
  text = '', 
  fs = 2.3,
  gradient = false,
  fw = 0
}) => {
  return (
    <>
      {type === 'h1' && <Titleh1 fs={fs}>{text}</Titleh1>}
      {type === 'h2' && <Titleh2 fs={fs} fw={fw} gradient={gradient}>{text}</Titleh2>}
      {type === 'h3' && <Titleh3 fs={fs} fw={fw} gradient={gradient}>{text}</Titleh3>}
    </>
  )
}

export default Title
