import { 
  Moon, 
  Sun, 
  Search, 
  Eye,
  ArrowUp,
} from '@styled-icons/heroicons-solid'
import { ReactLogo, Github } from '@styled-icons/boxicons-logos'
import { ThumbLike } from '@styled-icons/fluentui-system-filled'
import styled from 'styled-components'

const MoonIcon = styled(Moon)`
  width: ${props => props.width}rem;
  color: ${props => props.theme.iconButton};
`
const SunIcon = styled(Sun)`
  width: ${props => props.width}rem;
  color: ${props => props.theme.iconButton};
`
const SearchIcon = styled(Search)`
  width: ${props => props.width}rem;
`
const React = styled(ReactLogo)`
  color: ${props => props.theme.iconButton};
  width: ${props => props.width}rem;
`
const Like = styled(ThumbLike)`
  color: ${props =>  props.dark ? props.theme.iconButton : 'color: #fff'};
  width: ${props => props.width}rem;
`
const EyeIcon = styled(Eye)`
  color: ${props => props.theme.iconButton};
  width: ${props => props.width}rem;
`
const ArrowUpIcon = styled(ArrowUp)`
  color: ${props => props.theme.iconButton};
  width: ${props => props.width}rem;
`
const GithubIcon = styled(Github)`
  color: #A0AEC0;
  width: ${props => props.width}rem;
`

const Icon = ({ type, width = 1.2 }) => {
  switch(type) {
    case 'MOON':
      return <MoonIcon width={width} />
    case 'SUN':
      return <SunIcon width={width} />
    case 'SEARCH':
      return <SearchIcon width={width} />
    case 'LIKE':
      return <Like width={width} />
    case 'TOGGLEABLE_LIKE': 
      return <Like width={width} dark /> 
    case 'EYE':
      return <EyeIcon width={width} />
    case 'ARROW_UP':
      return <ArrowUpIcon width={width} />
    case 'GITHUB': 
      return <GithubIcon width={width} />
    default:
      return <React width={width} />
  }
}

export default Icon