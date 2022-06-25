import styled from 'styled-components'

const TagStyled = styled.span`  
  color: #fff;
`

const Caption = ({ text = 'photo' }) => {
  return (
    <TagStyled>{text}</TagStyled>
  )
}

export default Caption