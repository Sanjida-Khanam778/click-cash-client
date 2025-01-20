import { Navigate } from 'react-router-dom'
import useRole from '../hooks/useRole'
import Loader from '../pages/Loader/Loader'

const WorkerRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <Loader />
  if (role === 'Worker') return children
  return <Navigate to='/dashboard' replace='true' />
}

export default WorkerRoute