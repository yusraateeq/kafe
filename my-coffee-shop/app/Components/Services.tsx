import React from "react";
import service1 from "../assets/service1.jpeg";
import service2 from "@/app/assets/service2.jpeg";
import service3 from "@/app/assets/service3.webp";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <section
      className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-gray-800 min-h-screen py-16 px-6 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h1 className="text-6xl font-bold text-orange-300">Our Services</h1>
        <p className="mt-4 text-lg text-gray-300">
          From premium beans to immersive coffee-making workshops, we’re here to deliver a unique coffee experience you’ll love.
        </p>
      </div>

      <div className="relative mt-20 space-y-12">
        <div
          className="relative flex flex-col md:flex-row items-center bg-white shadow-xl rounded-lg overflow-hidden group"
          data-aos="fade-right"
        >
          <Image
            src={service1}
            alt="Custom Coffee Brewing"
            className="w-full md:w-1/2 h-[300px] md:h-[600px] object-cover"
          />
          <div className="p-8 w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-[#8b4513] group-hover:text-orange-700 transition-colors">
              Custom Coffee Brewing
            </h3>
            <p className="mt-4 text-gray-600 group-hover:text-gray-800 transition-colors">
              Indulge in freshly brewed coffee crafted to your unique taste. Whether you prefer a strong espresso shot or a smooth latte, our expert baristas will create your perfect cup.
            </p>
            <p className="mt-4 text-gray-500">
              Experience a personalized brewing process that caters to your individual flavor preferences and brings out the best in every bean.
            </p>
          </div>
        </div>

        <div
          className="relative flex flex-col md:flex-row-reverse items-center bg-white shadow-xl rounded-lg overflow-hidden group"
          data-aos="fade-left"
        >
          <Image
            src={service2}
            alt="Premium Coffee Beans"
            className="w-full md:w-1/2 h-[300px] md:h-full object-cover"
          />
          <div className="p-8 w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-[#8b4513] group-hover:text-orange-700 transition-colors">
              Premium Coffee Beans
            </h3>
            <p className="mt-4 text-gray-600 group-hover:text-gray-800 transition-colors">
              Our coffee beans are sourced from the finest farms around the world, ensuring each cup is rich in flavor and aroma. We work directly with ethical farmers to deliver the highest quality beans.
            </p>
            <p className="mt-4 text-gray-500">
              Taste the difference in every sip, and enjoy blends that have been roasted to perfection for a truly premium experience.
            </p>
          </div>
        </div>

        <div
          className="relative flex flex-col md:flex-row items-center bg-white shadow-xl rounded-lg overflow-hidden group"
          data-aos="fade-right"
        >
          <Image
            src={service3}
            alt="Coffee Workshops"
            className="w-full md:w-1/2 h-[300px] md:h-full object-cover"
          />
          <div className="p-8 w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-[#8b4513] group-hover:text-orange-700 transition-colors">
              Coffee Workshops
            </h3>
            <p className="mt-4 text-gray-600 group-hover:text-gray-800 transition-colors">
              Dive into the art of coffee making with our expert-led workshops. Learn how to brew like a pro, master latte art, and discover the secrets behind your favorite coffee flavors.
            </p>
            <p className="mt-4 text-gray-500">
              Perfect for coffee enthusiasts of all levels, our workshops are designed to deepen your appreciation for this beloved beverage and equip you with new skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
