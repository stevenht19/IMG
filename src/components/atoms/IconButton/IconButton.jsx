import styled from 'styled-components'

const Button = styled.button`
  border: none;
  background-color: transparent;
`

const IconButton = ({ 
  onClick, 
  className, 
  children 
}) => {
  return (
    <Button 
      {...(onClick ? { onClick: onClick } : {})}
      {...(className ? { className: className } : {})}
    >
      {children}
    </Button>
  )
}

export default IconButton