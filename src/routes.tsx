import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'

const MainRoutes = ():JSX.Element => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
    </Routes>
  )
}

export default MainRoutes