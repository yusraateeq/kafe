"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import backgroundImage from '../assets/beans-banner.jpg' 
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "aos/dist/aos.css"; 
import AOS from "aos"; 

const ContactPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div>
            <Header />
            <section className="relative py-32 text-center text-white overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={backgroundImage}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-65" 
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-6xl font-extrabold mb-6 text-orange-900" data-aos="fade-in">
                        Discover the True Essence of Coffee
                    </h2>
                    <p className="font-bold text-black text-xl mb-8" data-aos="fade-in" data-aos-delay="100">
                        At Coffee Grove, we bring you a collection of the finest coffees, meticulously crafted for
                        the true coffee lover. Join us in our journey to explore flavors, aromas, and the passion behind every cup.
                    </p>
                    <div className="flex justify-center">
                        <button className="px-8 py-3 font-bold text-lg bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all transform hover:scale-105" data-aos="fade-in" data-aos-delay="200">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            <section className=" mx-auto py-28 px-6 bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-950">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-orange-300 mb-12" data-aos="fade-up">
                    Our Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform" data-aos="fade-up">
                        <h3 className="text-2xl font-semibold mb-2">📍 Address</h3>
                        <p className="text-gray-600">
                            123 Coffee Street,<br /> New York, NY 10001
                        </p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-2xl font-semibold mb-2">☎ Phone</h3>
                        <p className="text-gray-600">
                            +1 (123) 456-7890<br />
                            +1 (987) 654-3210
                        </p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-2xl font-semibold mb-2">📧 Email</h3>
                        <p className="text-gray-600">
                            contact@coffeegrove.com
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative bg-white text-gray-800 py-16 px-6 bg-gradient-to-r from-zinc-900 to-orange-900">
                <div className="absolute inset-0  opacity-60"></div>

                <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 md:px-12">
                    <div className="w-full md:w-1/2" data-aos="slide-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-200">
                            Let us Talk!
                        </h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Have questions or want to work together? Send us a message, and we will respond within 24 hours. Let us build something amazing together!
                        </p>

                        <ul className="space-y-6 text-gray-300">
                            <li className="flex items-center gap-4">
                                <div className="text-orange-500 text-2xl">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <p className="font-medium">+123 456 789</p>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="text-orange-500 text-2xl">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <p className="font-medium">info@yourdomain.com</p>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="text-orange-500 text-2xl">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <p className="font-medium">123 Main Street, City, Country</p>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/2 bg-gray-800 text-white rounded-lg shadow-xl p-8" data-aos="slide-right">
                        <h3 className="text-2xl font-bold mb-6 text-center">
                            Send Us a Message
                        </h3>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-300 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Write your message here..."
                                    className="w-full p-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 ease-in-out text-white font-bold px-6 py-3 rounded-full transform hover:scale-105"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-950">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-100 mb-8" data-aos="fade-up">
                    Find Us Here
                </h2>
                <div className="w-full h-[50vh]" data-aos="fade-up">
                    <iframe
                        className="w-full h-full rounded-lg shadow-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.738226981502!2d-74.00597278459316!3d40.71277537933081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNSJX!5e0!3m2!1sen!2sus!4v1627384575807!5m2!1sen!2sus"
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ContactPage;
