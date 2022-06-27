import styled, { keyframes } from 'styled-components'

const opacityAnimation = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`

const ImageStyled = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt
}))`
  animation: ${opacityAnimation} .4s ease-in-out;
  display: block;
  width: 100%;
  object-fit: cover;
  height: ${props => props.h ? props.h : '100%'};
  ${props => props.br && `border-radius: ${props.br}`};
`

const Image = ({ url, h = 0, br = 0, alt }) => {
  return (
    <ImageStyled 
      src={url} 
      h={h} 
      br={br}
      alt={alt}
    />
  )
}

export default Image