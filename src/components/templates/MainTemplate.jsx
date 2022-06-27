import Header from '@/components/organisms/Header'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/organisms/Footer'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 95rem;
  margin-left: auto;
  margin-right: auto;
`

const MainTemplate = () => {
  return <>
    <Container>
      <Header />
      <Outlet />
    </Container>
    <Footer />
  </>
}

export default MainTemplate