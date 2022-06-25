import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import { Outlet } from 'react-router-dom'

const MainTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default MainTemplate