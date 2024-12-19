import React from 'react'
import Image from 'next/image'
import coffee from "../assets/about-coffee.png"
import cup from "../assets/cup.png"

const About = () => {
    return (
        <div className='bg-gradient-to-r from-zinc-950 to-orange-950 pt-20 px-6 md:px-10'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-16'>
                <div 
                    className='bg-gradient-to-r from-zinc-900 to-gray-200 rounded-t-full py-12 md:py-24 w-full md:w-1/2'
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <div className='relative overflow-hidden rounded-xl'>
                        <Image
                            src={coffee}
                            alt="Coffee Image"
                            width={700}
                            height={500}
                            className='transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:opacity-80 w-full'
                        />
                    </div>
                </div>

                <div 
                    className="text-white max-w-4xl mx-auto py-10 w-full md:w-1/2"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <h2 className="text-5xl font-bold text-orange-200 text-center mb-6" data-aos="fade-up">About Us</h2>
                    <h5 className="text-2xl text-white text-center mb-8" data-aos="fade-up" data-aos-delay="100">What Makes our Coffee Special?</h5>
                    <p className="text-gray-400 text-center mb-16" data-aos="fade-up" data-aos-delay="200">
                        At Coffee Grove, we take pride in crafting every cup with passion and precision. Our coffee is not just a beverage; it is an experience. Here’s what sets us apart:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div 
                            className="flex items-center gap-6 hover:scale-105 transition-all transform" 
                            data-aos="zoom-in" 
                            data-aos-delay="300"
                        >
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                <Image src={cup} alt="Icon" width={30} height={30} />
                            </div>
                            <div>
                                <h6 className="text-orange-400 text-xl font-semibold">Hand-Picked Beans</h6>
                                <p className="text-gray-400">
                                    We source only the finest, ethically-grown coffee beans from around the world.
                                </p>
                            </div>
                        </div>

                        <div 
                            className="flex items-center gap-6 hover:scale-105 transition-all transform" 
                            data-aos="zoom-in" 
                            data-aos-delay="400"
                        >
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                <Image src={cup} alt="Icon" width={30} height={30} />
                            </div>
                            <div>
                                <h6 className="text-orange-400 text-xl font-semibold">Expert Roasting</h6>
                                <p className="text-gray-400">
                                    Our beans are roasted to perfection in small batches, preserving the natural flavors and aromas.
                                </p>
                            </div>
                        </div>

                        <div 
                            className="flex items-center gap-6 hover:scale-105 transition-all transform" 
                            data-aos="zoom-in" 
                            data-aos-delay="500"
                        >
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                <Image src={cup} alt="Icon" width={30} height={30} />
                            </div>
                            <div>
                                <h6 className="text-orange-400 text-xl font-semibold">Freshness Guaranteed</h6>
                                <p className="text-gray-400">
                                    From our roasting process to your cup, freshness is our top priority.
                                </p>
                            </div>
                        </div>

                        <div 
                            className="flex items-center gap-6 hover:scale-105 transition-all transform" 
                            data-aos="zoom-in" 
                            data-aos-delay="600"
                        >
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                <Image src={cup} alt="Icon" width={30} height={30} />
                            </div>
                            <div>
                                <h6 className="text-orange-400 text-xl font-semibold">Sustainable Practices</h6>
                                <p className="text-gray-400">
                                    At Coffee Grove, we believe every cup should be as unique as you are.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center' data-aos="fade-up" data-aos-delay="700">
                        <button className="mt-12 relative px-16 py-4 font-bold text-white text-lg rounded-full shadow-lg overflow-hidden group animate-gradient bg-gradient-to-r from-orange-700 via-red-800 to-orange-300-500 bg-[length:400%_400%] hover:scale-105 focus:outline-none">
                            <span className="relative z-10">Explore more</span>
                            <span className="absolute -inset-1 bg-gradient-to-r from-orange-700 to-orange-900 opacity-0 rounded-full group-hover:opacity-20 transition duration-500"></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='border-b-4 border-gray-600 py-6'></div>
        </div>
    )
}

export default About
