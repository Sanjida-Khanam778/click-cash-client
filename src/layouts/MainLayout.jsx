import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar'
import Footer from '../components/Shared/Footer'
import useAuth from '../hooks/useAuth'
const MainLayout = () => {
  const {theme} = useAuth()
  return (
    <div className={`${theme==='dark'?'text-white':'text-black'}`}>
      <header className={` sticky top-0 z-10 ${theme==='dark'?'bg-black/85':'bg-[#FBF5E5]'}`}>
      <Navbar />
      </header>
      <div className='min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout