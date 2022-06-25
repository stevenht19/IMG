import Image from '@/components/atoms/Image'
import Caption from '@/components/molecules/Caption'
import LikeNumber from '@/components/molecules/LikeNumber'
import UnstyledLink from '@/components/atoms/UnstyledLink'
import styled from 'styled-components'

const PictureStyled = styled.li`
  position: relative;
  user-select: none;
  overflow: hidden;
  &:hover {
    div {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const Picture = ({ 
  id,
  url, 
  tags = [],
  likes,  
}) => {
  const texts = tags.split(',')

  return (
    <PictureStyled>
      <UnstyledLink path={`image/${id}`}>
        <LikeNumber number={likes} />
        <Image url={url} />
        <Caption tags={texts} />
      </UnstyledLink>
    </PictureStyled>
  )
}

export default Picture