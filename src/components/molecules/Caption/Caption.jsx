import Tag from '@/components/atoms/Tag'
import styled from 'styled-components'

const CaptionStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  opacity: 0;
  background-image: linear-gradient(0deg,rgba(0,0,0,.6) 0, transparent);
  justify-content: space-around;
  position: absolute;
  width: 100%;
  transition-property: transform, opacity;
  transition-duration: .3s;
  transition-timing-function: ease;
  bottom: 0;
  transform: translateY(2rem);
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const Caption = ({ tags = [] }) => {
  return (
    <CaptionStyled>
      {
        tags.map((tag, i) => (
          <Tag text={tag} key={i} />
        ))
      }
    </CaptionStyled>
  )
}

export default Caption