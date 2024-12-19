"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../assets/beans-banner.jpg";
import Image from "next/image";
import Coffee1 from "../assets/espresso.webp";
import Coffee2 from "@/app/assets/cappuccino.webp";
import Coffee3 from "@/app/assets/latte.png";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Services from "../Components/Services";

const featuredCoffees = [
  {
    id: 1,
    name: "Espresso",
    description: "Rich and bold coffee to start your day.",
    image: Coffee1,
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Smooth espresso with frothed milk.",
    image: Coffee2,
  },
  {
    id: 3,
    name: "Latte",
    description: "A velvety smooth coffee for a relaxed afternoon.",
    image: Coffee3,
  },
];

const coffeeMenu = [
  {
    id: 1,
    name: "Americano",
    image: Coffee3,
    description: "Strong espresso diluted with water",
    price: 4.5,
  },
  { id: 2, name: "Mocha", description: "A delicious chocolate-coffee fusion", price: 5.0 },
  { id: 3, name: "Flat White", description: "Espresso with velvety microfoam", price: 4.8 },
];

const CoffeeWebsite = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Header />
      <section className="relative py-32 text-center text-white" data-aos="fade-in">
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
          <h2 className="text-6xl font-extrabold mb-6 text-orange-900 animate__animated animate__fadeIn">
            Fresh Coffee, Great Vibes
          </h2>
          <p className="font-bold text-black text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Savor the best coffee blends, freshly brewed just for you!
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-3 font-bold text-lg bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Services />

      <section className="py-16 bg-gradient-to-r from-zinc-950 to-orange-950 px-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-semibold text-orange-300">Our Featured Coffees</h2>
          <p className="text-lg text-gray-100 mt-4">Crafted with love and the finest beans.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCoffees.map((coffee) => (
            <div
              key={coffee.id}
              className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl bg-white"
              data-aos="zoom-in"
            >
              <Image
                src={coffee.image}
                alt={coffee.name}
                width={500}
                height={500}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold">{coffee.name}</h3>
                <p className="text-lg text-gray-600 mt-2">{coffee.description}</p>
                <button className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 px-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-5xl font-extrabold text-orange-400 tracking-wider">Our Coffee Menu</h2>
          <p className="text-lg text-gray-200 mt-4">
            Explore our rich and diverse coffee options crafted with love.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeMenu.map((item) => (
            <div
              key={item.id}
              className="relative border p-6 rounded-lg shadow-lg bg-gradient-to-b from-gray-800 via-gray-900 to-black hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              data-aos="zoom-in"
            >
              <div className="absolute top-0 right-0 px-3 py-1 bg-orange-600 text-white text-xs rounded-bl-lg">
                ${item.price}
              </div>
              <h3 className="text-2xl font-bold text-orange-300">{item.name}</h3>
              <p className="text-gray-300 mt-3 text-base leading-relaxed">{item.description}</p>
              <button className="mt-6 w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-200">
                Order Now
              </button>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-center mt-16"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <button className="relative px-16 py-4 font-bold text-lg text-white rounded-full shadow-lg bg-gradient-to-r from-orange-700 via-red-700 to-orange-500 bg-[length:400%_400%] animate-pulse hover:scale-105 transition-transform duration-300">
            View More
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CoffeeWebsite;
