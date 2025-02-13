import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Login from './Page/Login'
import ProtectedRoutes from './utils/ProtectedRoutes'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function App() {
  const user = Cookies.get('user')

  return (
    <BrowserRouter>
      <Routes>
        {/* If the user exists, navigate away from the login page */}
        <Route 
          path="/login" 
          element={user ? <Navigate to="/" /> : <Login />} 
        />
        
        {/* Protected routes that require the user to be logged in */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home user={user} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
