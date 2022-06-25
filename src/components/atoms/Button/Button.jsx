import styled from 'styled-components'

const ButtonStyled = styled.button`
  border-radius: ${props => props.br || '2rem'};
  border: none;
  color: ${(props) => props.theme.buttonText};
  font-family: inherit;
  width: 5.5rem;
  font-size: .9rem;
  font-weight: 600;
  background-image: linear-gradient(45deg, ${(props) => props.theme.magentaGradient}, ${(props) => props.theme.blueGradient});
`

const Button = ({ 
  type = 'button', 
  text = '',
  element = false,
  br = false,
}) => {
  return (
    <ButtonStyled
      br={br} 
      type={type}
    >
      {element || text}
    </ButtonStyled>
  )
}

export default Button