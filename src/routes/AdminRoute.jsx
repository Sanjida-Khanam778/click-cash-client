import { Navigate } from 'react-router-dom'
import useRole from '../hooks/useRole'
import Loader from '../pages/Loader/Loader'

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <Loader />
  if (role === 'Admin') return children
  return <Navigate to='/dashboard' replace='true' />
}

export default AdminRoute