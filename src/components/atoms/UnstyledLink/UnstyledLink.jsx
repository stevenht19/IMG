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
`

const UnstyledLink = ({ path = '/', children }) => {
  return (
    <StyledLink path={path}>
      {children}
    </StyledLink>
  )
}

export default UnstyledLink