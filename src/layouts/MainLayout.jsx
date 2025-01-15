import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar'
import Footer from '../components/Shared/Footer'
const MainLayout = () => {
  return (
    <div className='bg-white'>
      <header className='bg-[#FBF5E5] sticky top-0 z-10'>
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