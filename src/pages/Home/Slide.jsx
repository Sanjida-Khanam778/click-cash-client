/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const Slide = ({ image, text, subtitle }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center w-8/12'>
          <h1 className='text-2xl font-semibold text-white lg:text-6xl'>
            {text}
          </h1>
          <p className='font-semibold mt-2 text-white text-opacity-60 lg:text-xl'>
            {subtitle}
          </p>
          <br />
          <Link
            onClick={() => window.open("https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Sanjida-Khanam778", "_blank")}
            to='/'
            className='btn w-full px-5 py-3 mt-4 text-sm font-medium bg-[#A35C7A] text-white capitalize transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-[#A35C7A] focus:outline-none focus:bg-[#A35C7A]'
          >
            Join as Developer
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide
