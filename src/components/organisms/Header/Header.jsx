import { useThemeContext } from '@/hooks/useThemeContext'
import Icon from '@/components/atoms/Icon'
import MainTitle from '@/components/molecules/MainTitle'
import IconButton from '@/components/atoms/IconButton'
import styled from 'styled-components'

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`

const Header = () => {
  const { theme, onToggle } = useThemeContext()

  return (
    <HeaderStyled>
      <MainTitle />
      <IconButton onClick={onToggle}>
        <Icon 
          type={theme === 'dark' ? 'SUN' : 'MOON'} 
          width={1.8} 
        />
      </IconButton>
    </HeaderStyled>
  )
}

export default Header