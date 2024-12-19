'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import coffee from "../assets/coffe-banner.png"

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out' }) 
    }, [])

    return (
        <div className='bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 pt-10 px-6 md:px-10'>
            <div className='flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0'>
                <div 
                    className='text-white md:w-1/2' 
                    data-aos="fade-right" 
                >
                    <h1 className='text-4xl md:text-6xl font-extrabold leading-tight mb-4'>
                        Sip Into Happiness, One Cup at a Time
                    </h1>
                    <p className='font-sans text-lg md:text-xl'>
                        Welcome to a world where every sip is a moment of joy and every cup tells a story. At <span className='font-bold text-orange-200 text-xl'> COFFEE GROVE</span> , we believe coffee is more than just a drink—it is an experience, a ritual, and a source of comfort.
                    </p>
                    <button className="relative px-12 py-4 font-bold text-white text-lg rounded-full shadow-lg overflow-hidden group animate-gradient bg-gradient-to-r from-orange-700 via-red-800 to-orange-300-500 bg-[length:400%_400%] hover:scale-105 focus:outline-none mt-8">
                        <span className="relative z-10">Explore more</span>
                        <span className="absolute -inset-1 bg-gradient-to-r from-orange-700 to-orange-900 opacity-0 rounded-full group-hover:opacity-20 transition duration-500"></span>
                    </button>
                </div>

                <div 
                    className="rounded-xl md:w-1/2" 
                    data-aos="fade-left" 
                >
                    <Image
                        src={coffee}
                        alt="Coffee Image"
                        width={580}
                        height={400}
                        className="transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:opacity-80"
                    />
                </div>
            </div>
            <div className='border-b-4 border-gray-600 py-6'></div>
        </div>
    )
}

export default Hero
