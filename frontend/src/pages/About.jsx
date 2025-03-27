import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function About() {
  return (
<div>

<div className='text-center text-2xl pt-10 text-[#707070]'>
  <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
</div>

<div className='my-10 flex flex-col md:flex-row gap-12'>
  <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
  <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
  <p>Welcome to VaiNaHa, your trusted companion in accessing quality healthcare with ease. At VaiNaHa, we believe in the ancient wisdom of "Vaidyo Narayano Hari," where doctors are revered as healers. Our mission is to simplify the process of booking doctor appointments and managing health records, ensuring seamless and stress-free healthcare for everyone.</p>

<p>VaiNaHa is dedicated to bringing innovation to healthcare technology. We continuously enhance our platform, integrating the latest advancements to improve user experience and provide top-notch services. Whether it’s your first consultation or ongoing medical care, VaiNaHa is here to assist you at every step.</p>

<b className="text-gray-800">Our Vision</b>
<p>Our vision at VaiNaHa is to revolutionize healthcare accessibility across India. We aim to bridge the gap between patients and doctors by providing a reliable, user-friendly platform that ensures timely medical attention. With VaiNaHa, your health is just a click away!</p>

  </div>
</div>

<div className='text-xl my-4'>
  <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
</div>

<div className='flex flex-col md:flex-row mb-20'>
  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
    <b>EFFICIENCY:</b>
    <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
    <b>CONVENIENCE: </b>
    <p>Access to a network of trusted healthcare professionals in your area.</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
    <b>PERSONALIZATION:</b>
    <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
  </div>
</div>

</div>
)
}

export default About