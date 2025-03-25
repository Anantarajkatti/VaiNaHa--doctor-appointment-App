import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function Header() {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-[#E9ECF2] rounded-lg px-6 md:px-10 lg:px-20 '>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-primary font-semibold leading-tight md:leading-tight lg:leading-tight'>
                     Vaidyo Narayano Hari: 
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text- text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Book Appointment With Trusted Doctors. browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-[#009698] px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Book appointment <img className='w-3  text-white' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.team_image} alt="" />
            </div>
        </div>
  )
}

export default Header