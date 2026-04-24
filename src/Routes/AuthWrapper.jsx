import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthWrapper = ({ children }) => {

  const { user } = useSelector((state) => state.usersreducer)

  if (user === undefined) {
    return <div>Loading...</div>
  }

  return user ? children : <Navigate to="/login" />
}

export default AuthWrapper