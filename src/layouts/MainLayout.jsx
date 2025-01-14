import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar'
import Footer from '../components/Shared/Footer'
const MainLayout = () => {
  return (
    <div className='bg-white'>
      <header className='bg-[#FBF5E5]'>

      <Navbar />
      </header>
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout