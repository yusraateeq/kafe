import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import caramelMacchiato from "../assets/espresso.webp";
import caramelLatte from "../assets/latte.png";
import mocha from "../assets/Mocha.png";
import americano from "../assets/americano.jpeg";
import frenchVanilla from "../assets/macchiato.webp";
import hotChocolate from "../assets/iced coffee.webp";
import latte from "../assets/Affogato.png";
import cafeColombia from "../assets/cappuccino.webp";

const MenuSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const menuItems = [
        { name: "Caramel Macchiato", price: "$7.90", description: "Espresso and Light Layer of Crema", image: caramelMacchiato },
        { name: "Caramel Latte", price: "$8.90", description: "Espresso and Light Layer of Crema", image: caramelLatte },
        { name: "Mocha", price: "$8.90", description: "Espresso and Light Layer of Crema", image: mocha },
        { name: "Americano", price: "$6.90", description: "Espresso and Light Layer of Crema", image: americano },
        { name: "French Vanilla", price: "$7.90", description: "Espresso and Light Layer of Crema", image: frenchVanilla },
        { name: "Hot Chocolate", price: "$7.90", description: "Espresso and Light Layer of Crema", image: hotChocolate },
        { name: "Latte", price: "$5.90", description: "Espresso and Light Layer of Crema", image: latte },
        { name: "Café Colombia", price: "$9.90", description: "Espresso and Light Layer of Crema", image: cafeColombia },
    ];

    return (
        <section
            className="bg-gradient-to-r from-zinc-950 to-orange-950 py-16"
            
        >
            <div className="container mx-auto px-6">
                <h2
                    className="text-5xl font-bold text-center text-orange-300 mb-12"
                    data-aos="zoom-in"
                >
                    Our Coffee Menu
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between"
                            data-aos="fade-right"
                            data-aos-delay={`${index * 100}`}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-20 h-20">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-100">
                                        {item.name}
                                    </h3>
                                    <p className="text-md text-gray-400">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            <p className="text-lg font-bold text-orange-200">
                                {item.price}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuSection;


