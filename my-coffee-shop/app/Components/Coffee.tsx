'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import cup from "../assets/black-coffee.png"

const Coffee = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        })
    }, [])

    return (
        <div className='bg-gradient-to-r from-zinc-950 to-zinc-900 py-28 px-10'>
            <div data-aos="fade-up" className="text-center mb-16">
                <h2 className="text-5xl font-bold text-orange-200 mb-4">Our Special Brews</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    Discover our handpicked selection of signature coffees crafted with precision and passion. Perfect for every coffee lover.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className='bg-gray-100 shadow-lg hover:shadow-black shadow-white p-6 transition-all rounded-lg  transform hover:scale-105 hover:bg-orange-800 hover:text-white'
                >
                    <div className='flex items-center justify-center mb-4'>
                        <Image src={cup} alt="Mocha Bliss" width={120} height={50} />
                    </div>
                    <h2 className='text-2xl font-bold text-center mb-4'>Mocha Bliss</h2>
                    <p className='text-center'>
                        Each sip of Mocha Bliss is a decadent escape into rich, velvety chocolate flavors.
                    </p>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className='bg-gray-100 shadow-lg hover:shadow-black shadow-white p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-orange-800 hover:text-white'
                >
                    <div className='flex items-center justify-center mb-4'>
                        <Image src={cup} alt="Caramel Velvet Latte" width={120} height={50} />
                    </div>
                    <h2 className='text-2xl font-bold text-center mb-4'>Caramel Velvet Latte</h2>
                    <p className='text-center'>
                        Indulge in the silky smoothness of our Caramel Velvet Latte, infused with caramel magic.
                    </p>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className='bg-gray-100 shadow-lg hover:shadow-black shadow-white p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-orange-800 hover:text-white'
                >
                    <div className='flex items-center justify-center mb-4'>
                        <Image src={cup} alt="Hazelnut Brewmaster" width={120} height={50} />
                    </div>
                    <h2 className='text-2xl font-bold text-center mb-4'>Hazelnut Brewmaster</h2>
                    <p className='text-center'>
                        Take your coffee journey to new heights with the nutty richness of Hazelnut Brewmaster.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coffee
