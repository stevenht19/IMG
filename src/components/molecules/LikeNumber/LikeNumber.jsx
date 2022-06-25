import Icon from '@/components/atoms/Icon'
import styled, { css } from 'styled-components'

const Likes = styled.div`
  display: flex;
  align-items: center;
  gap: .2rem;
  ${props => !props.isVisible && css`
    transition: opacity .3s ease;
    opacity: 0;
  `}
  color: #fff;
  position: absolute;
  top: 10px;
  right: 10px;
`

const LikeNumber = ({ number, opacity = false }) => {
  return (
    <Likes isVisible={opacity}>
      <Icon type='LIKE' />
      <span>{number}</span>
    </Likes>
  )
}

export default LikeNumber