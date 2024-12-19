import React from 'react'
import Image from 'next/image'
import storyImage from '../assets/imagee2.webp'
import storyImage2 from '../assets/imagee.webp'
import Header from '../Components/Header'
import backgroundImage from '../assets/beans-banner.jpg'
import backgroundImage1 from '../assets/coffee-cup.jpeg'
import coffee1 from '../assets/coffee1.png'
import coffee2 from '../assets/coffee2.png'
import coffee3 from '../assets/coffee3.png'
import coffee4 from '../assets/coffee4.png'
import coffee5 from '../assets/coffee5.png'
import coffee6 from '../assets/coffee6.png'
import Footer from '../Components/Footer'

const OurStory = () => {
    return (
        <section>
            <Header />
            <section className="relative py-32 text-center text-white">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={backgroundImage}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-65"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10" data-aos="fade-up">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-orange-900">
                        Discover the True Essence of Coffee
                    </h2>
                    <p className="font-bold text-black text-lg md:text-xl mb-8" data-aos="fade-up" data-aos-delay="100">
                        At Coffee Grove, we bring you a collection of the finest coffees, meticulously crafted for
                        the true coffee lover. Join us in our journey to explore flavors, aromas, and the passion behind every cup.
                    </p>
                    <div className="flex justify-center">
                        <button className="px-8 py-3 font-bold text-lg bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
            
            <div className="py-24 bg-gradient-to-r from-zinc-900 to-orange-900 text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-orange-200" data-aos="fade-up">
                        Our Story
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex flex-col justify-center text-center md:text-left" data-aos="fade-right" data-aos-delay="300">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-400">From Our Roots to Your Cup</h3>
                            <p className="text-gray-300 mb-6">
                                At Coffee Grove, we’ve been crafting the perfect coffee experience for over a decade.
                                Our journey began with a simple idea: to bring the finest coffee from around the world
                                to your cup, crafted with passion, care, and expertise. From ethically sourced beans to
                                artisanal roasting techniques, we are committed to delivering an extraordinary cup every time.
                            </p>
                            <p className="text-gray-300 mb-6">
                                Our founders started their journey in the heart of the coffee-growing regions.
                                They were inspired by the vibrant culture, the people, and the endless dedication to coffee.
                                Today, Coffee Grove continues to push the boundaries of flavor, bringing the true essence of coffee to life.
                            </p>
                        </div>

                        <div className="relative overflow-hidden rounded-lg shadow-lg" data-aos="fade-left" data-aos-delay="400">
                            <Image
                                src={storyImage}
                                alt="Our Story"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover transition-all duration-500 transform hover:scale-105 hover:rotate-3 hover:opacity-80"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                        <div className="relative overflow-hidden rounded-lg shadow-lg" data-aos="fade-right" data-aos-delay="500">
                            <Image
                                src={storyImage2}
                                alt="Our Journey"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover transition-all duration-500 transform hover:scale-105 hover:rotate-3 hover:opacity-80"
                            />
                        </div>

                        <div className="flex flex-col justify-center text-center md:text-left" data-aos="fade-left" data-aos-delay="600">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-400">The Heart of Coffee Grove</h3>
                            <p className="text-gray-300 mb-6">
                                Over the years, we’ve grown, but our values remain the same: quality, community, and sustainability.
                                We are dedicated to offering the best coffee experience by connecting with our customers and the coffee farmers.
                                We focus on sustainable sourcing, fair trade, and creating lasting relationships that benefit everyone.
                            </p>
                            <p className="text-gray-300 mb-6">
                                Our journey doesn’t stop here. We invite you to join us as we continue to innovate and deliver the finest coffee, one cup at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center bg-gradient-to-r from-zinc-950 to-zinc-900 pt-28 pb-20">
                <p className="text-lg text-white mb-4" data-aos="fade-up">From floral and bright to bold and smooth coffee flavors</p>
                <h2 className="text-4xl md:text-5xl text-orange-200 mb-20" data-aos="fade-up" data-aos-delay="100">Providing unique coffee experiences</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-20">
                    <div className="flex flex-col md:w-1/3">
                        <div className="flex items-start gap-6 mb-10" data-aos="fade-right" data-aos-delay="200">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                <Image src={coffee1} alt="Coffee Shop" width={30} height={30} />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-3xl text-orange-200 font-semibold">Coffee Shop</h3>
                                <p className="text-sm md:text-lg text-gray-400">Our coffees are carefully selected for quality, flavor, and social impact</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 mb-10" data-aos="fade-right" data-aos-delay="300">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                <Image src={coffee2} alt="Supreme Beans" width={30} height={30} />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-3xl text-orange-200 font-semibold">Supreme Beans</h3>
                                <p className="text-sm md:text-lg text-gray-400">Our coffees are carefully selected for quality, flavor, and social impact</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6" data-aos="fade-right" data-aos-delay="400">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                <Image src={coffee3} alt="High Quality" width={30} height={30} />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-3xl text-orange-200 font-semibold">High Quality</h3>
                                <p className="text-sm md:text-lg text-gray-400">Our coffees are carefully selected for quality, flavor, and social impact</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Image
                            src={backgroundImage1}
                            alt="Coffee Image"
                            width={300}
                            height={200}
                            className="md:w-64 md:h-64"
                        />
                    </div>

                    <div className="flex flex-col md:w-1/3">
                        <div className="flex items-start gap-6 mb-10" data-aos="fade-left" data-aos-delay="500">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                <Image src={coffee4} alt="Coffee Machine" width={30} height={30} />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-3xl text-orange-200 font-semibold">Coffee Machine</h3>
                                <p className="text-sm md:text-lg text-gray-400">Our coffees are carefully selected for quality, flavor, and social impact</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 mb-10" data-aos="fade-left" data-aos-delay="600">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                <Image src={coffee5} alt="Sustainability" width={30} height={30} />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-3xl text-orange-200 font-semibold">Sustainability</h3>
                                <p className="text-sm md:text-lg text-gray-400">Our coffees are carefully selected for quality, flavor, and social impact</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6" data-aos="fade-left" data-aos-delay="700">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                <Image src={coffee6} alt="Expert Baristas" width={30} height={30} />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-3xl text-orange-200 font-semibold">Expert Baristas</h3>
                                <p className="text-sm md:text-lg text-gray-400">Our coffees are carefully selected for quality, flavor, and social impact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    )
}

export default OurStory;
