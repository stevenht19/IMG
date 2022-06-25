import GridCenter from '@/components/atoms/GridCenter' 
import Text from '@/components/atoms/Text'

const EndMessage = () => {
  return (
    <GridCenter>
      <Text 
        text='Yay! You have seen it all' 
        p={1}
        centered 
      />
    </GridCenter>
  )
}

export default EndMessage