"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../assets/beans-banner.jpg";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

const CoffeeSlider = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);


    const [] = useState(0);



    return (
        <div>
            <Header />
             <section
                className="relative py-32 text-center text-white" 
                
            >
                <div className="absolute inset-0 -z-10" >
                    <Image
                        src={backgroundImage}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-65"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10" data-aos="fade-up">
                    <h2 className="text-6xl font-extrabold mb-6 text-orange-900">
                        Explore Our Coffee Menu
                    </h2>
                    <p className="font-bold text-black text-xl mb-8">
                        Dive into the world of coffee with our handpicked collection.
                    </p>
                    <div className="flex justify-center">
                        <button className="px-8 py-3 font-bold text-lg bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all transform hover:scale-105">
                            Browse Menu
                        </button>
                    </div>
                </div>
            </section>

            <Menu />

            <section
                className="py-28 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
                
            >
                <div className="container mx-auto px-6 text-center" data-aos="fade-right">
                    <h2 className="text-4xl font-bold text-orange-600 mb-8">
                        Why Choose Us?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div
                            className="p-6 bg-white rounded-lg shadow-lg"
                            data-aos="zoom-in"
                        >
                            <h3 className="text-2xl font-semibold text-orange-700">
                                Premium Quality
                            </h3>
                            <p className="text-gray-600 mt-4">
                                We source the finest coffee beans for a rich experience.
                            </p>
                        </div>
                        <div
                            className="p-6 bg-white rounded-lg shadow-lg"
                            data-aos="zoom-in"
                        >
                            <h3 className="text-2xl font-semibold text-orange-700">
                                Expertly Brewed
                            </h3>
                            <p className="text-gray-600 mt-4">
                                Brewed to perfection by trained baristas.
                            </p>
                        </div>
                        <div
                            className="p-6 bg-white rounded-lg shadow-lg"
                            data-aos="zoom-in"
                        >
                            <h3 className="text-2xl font-semibold text-orange-700">
                                Warm Ambiance
                            </h3>
                            <p className="text-gray-600 mt-4">
                                Enjoy your coffee in a cozy atmosphere.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CoffeeSlider;
