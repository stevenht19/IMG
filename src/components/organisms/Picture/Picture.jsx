import Image from '@/components/atoms/Image'

const Picture = ({ image }) => {
  return (
    <section>
      <Image url={image?.url} />
    </section>
  )
}

export default Picture