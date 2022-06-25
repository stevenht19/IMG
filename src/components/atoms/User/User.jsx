import styled from 'styled-components'

const ImageStyled = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  object-fit: cover;
`

const User = ({ url }) => {
  return (
    <ImageStyled src={url} />
  )
}

export default User