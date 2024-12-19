import React from 'react'
import Image from 'next/image'
import coffeeBg from '../assets/beans.jpeg' 

const HeroShowcase = () => {
    return (
        <section className="relative w-full h-[80vh]">
            <div className="absolute inset-0 z-0">
                <Image
                    src={coffeeBg}
                    alt="Coffee Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="brightness-75"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-black px-8">
                <div className='bg-gray-300 opacity-70 py-6 px-4'>
                    <h1
                        className="text-6xl md:text-7xl font-extrabold leading-tight mb-6"
                        data-aos="fade-down"
                    >
                        Discover Your Perfect Brew
                    </h1>
                    <p
                        className=" text-lg md:text-2xl max-w-3xl mb-10 "
                        data-aos="fade-up"
                    >
                        Savor the rich flavors of our hand-crafted coffee blends, made just for you. Where passion meets the perfect cup.
                    </p>
                    <button className="relative px-16 py-4 font-bold  text-lg rounded-full shadow-lg overflow-hidden group animate-gradient bg-gradient-to-r from-orange-700 via-red-800 to-orange-300-500 bg-[length:400%_400%] hover:scale-105 focus:outline-none mt-8">
                        <span className="relative z-10">Explore more</span>

                        <span className="absolute -inset-1 bg-gradient-to-r from-orange-700 to-orange-900 opacity-0 rounded-full group-hover:opacity-20 transition duration-500"></span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroShowcase
