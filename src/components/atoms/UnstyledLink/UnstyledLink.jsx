import { Link } from 'react-router-dom'
import styled from 'styled-components'

const RouterLink = ({ className, path, children }) => (
  <Link className={className} to={path}>
    {children}
  </Link>
)

const StyledLink = styled(RouterLink)`
  color: unset;
  text-decoration: none;
  color: ${props => props.theme.textColor};
  svg {
    fill: ${props => props.theme.textColor};
  }
`

const UnstyledLink = ({ path = '/', children }) => {
  return (
    <StyledLink path={path}>
      {children}
    </StyledLink>
  )
}

export default UnstyledLink