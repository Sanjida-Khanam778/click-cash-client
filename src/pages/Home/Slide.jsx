/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const Slide = ({ image, text, subtitle }) => {
  const getButtonText = () => {
    if (text.includes("Free Time")) return "Start Earning Now";
    if (text.includes("Microtasks")) return "Find Tasks";
    if (text.includes("Simplicity")) return "Sign Up Today";
    if (text.includes("Earn More")) return "Join & Get Paid";
    return "Get Started";
  };
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
          {/* <Link
            to='/dashboard'
            className='btn w-full px-5 py-3 mt-4 text-sm font-medium bg-[#A35C7A] text-white capitalize transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-[#A35C7A] focus:outline-none focus:bg-[#A35C7A]'
          >
          {getButtonText()}
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Slide
