import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Page/Home'
import Login from './Page/Login'
import ProtectedRoutes from './utils/ProtectedRoutes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />} >
        <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
