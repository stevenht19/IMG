import { Routes, Route } from 'react-router-dom'
import MainTemplate from '@/components/templates/MainTemplate'
import Home from '@/pages/Home'
import PicturePage from '@/pages/PicturePage'
import NotFound from '@/pages/NotFound'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 95rem;
  margin-left: auto;
  margin-right: auto;
`

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path='image/:id' element={<PicturePage />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Router