import styled from 'styled-components'

const InputStyled = styled.input`
  border-radius: 1rem;
  border: none;
  outline: 0px;
  padding: .7rem;
  width: 100%;
  font-family: inherit;
  font-size: 1.2rem;
  color: #1A202C;
  background-color: inherit;
  &::placeholder {
    color: ${(props) => props.theme.placeholder};
    font-size: clamp(.1rem, 10vw, 1rem);
  }
`

const Input = ({
  onChange, 
  type = 'text', 
  placeholder = 'Type something',
  name = 'name'
}) => {
  return (
    <InputStyled
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange} 
      spellCheck='false'
      autoComplete='off'
    />
  )
}

export default Input