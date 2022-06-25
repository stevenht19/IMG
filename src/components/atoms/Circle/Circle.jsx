import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  to {
    transform: translateY(0) scale(0.8);
  }
`

const CircleStyled = styled.div`
  transform: translateY(-1.1rem);
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${props => props.theme.textColor};
  border-radius: 50%;
  animation: ${animation} ${props => props.time}s infinite alternate-reverse;
`

const Circle = ({ time }) => {
  return (
    <CircleStyled time={time} />
  )
}

export default Circle