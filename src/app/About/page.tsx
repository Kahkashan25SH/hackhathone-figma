import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";


export default function About() {
  return (
    <div>
       <div className="relative w-full h-[316px] bg-cover bg-center" style={{ backgroundImage: "url('/shop img/Rectangle 1.png')" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <Image
              src="/shop img/Meubel House_Logos-05.png"
              alt="logo"
              width={77}
              height={77}
              className="mb-2"
            />
            <span className="text-4xl font-bold">My Account</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          {/* <h5 className="text-lg font-medium">Home</h5> */}
          <Link href="#">Home
          </Link>
          <IoIosArrowForward />
        <Link href="#">My Account</Link>
          {/* <h5 className="text-lg font-medium">Shop</h5> */}
        </div>
      </div>

{/* section 2 */}

    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen p-4">
      {/* Log In Section */}
      <div className="w-full md:w-1/2 max-w-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Log In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-black font-medium mb-2">
              Username or email address
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-[#9F9F9F] rounded-lg focus:ring-2 focus:ring-gray-800 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-black font-medium text-base mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-[#9F9F9F] rounded-lg focus:ring-2 focus:ring-gray-800 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-black font-normal text-base">
              Remember me
            </label>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="px-14 py-2 text-black rounded-[15px] border border-black hover:bg-gray-100 transition font-normal text-lg"
            >
              <Link href="/">Log In</Link>
            </button>
            <a href="#" className="text-black font-light text-sm">
              Lost Your Password?
            </a>
          </div>
        </form>
      </div>

      {/* Register Section */}
      <div className="w-full md:w-1/2 max-w-lg p-8 mt-6 md:mt-0 md:ml-6">
        <h2 className="font-semibold text-3xl mb-6">Register</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="register-email" className="block text-black font-medium text-base mb-2">
              Email address
            </label>
            <input
              type="email"
              id="register-email"
              className="w-full px-4 py-2 border border-[#9F9F9F] rounded-[10px] focus:ring-2 focus:ring-gray-800 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <p className="text-black text-base font-light mb-4">
            A link to set a new password will be sent to your email address.
          </p>

          <p className="text-black text-base font-light mb-6">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-semibold">privacy policy</span>.
          </p>

          <button
            type="submit"
            className="px-14 py-2 border border-black text-black rounded-[15px] hover:bg-gray-100 transition font-normal text-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>

    <div className=' flex lg:flex  sm:grid sm:gap-8 items-center justify-center w-full h-[400px] space-x-3 bg-[#FAF4F4] mt-6'>
        <div className='w-[376px] h-[108px]'>
          <h5 className='w-[205px] h-[48px] font-medium text-3xl'>Free Delivery</h5>
          <p className='font-normal text-xl text-[#9F9F9F]'>For all orders over $50, consectetur <br /> adipim scing elit.</p>
        </div>
        <div className='w-[376px] h-[108px]'>
          <h5 className='w-[244px] h-[48px] font-medium text-3xl '>90 Days Return</h5>
          <p className='font-normal text-xl text-[#9F9F9F]'>If goods have problems, consectetur adipim scing elit..</p>
        </div>
        <div className='w-[376px] h-[108px]'>
          <h5 className='w-[265px] h-[48px] font-medium text-3xl'>Secure Payment</h5>
          <p className='font-normal text-xl text-[#9F9F9F]'>100% secure payment, consectetur adipim scing elit..</p>
        </div>
      </div>
    </div>
  )
}