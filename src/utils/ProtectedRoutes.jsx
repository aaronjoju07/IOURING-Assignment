import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoutes = () => {
  const user = Cookies.get('user')
  console.log('user:', user);

  return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes