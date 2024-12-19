import React from 'react'
import Image from 'next/image'
import productImage from '../assets/espresso.webp' 
import productImage1 from '../assets/americano.jpeg'
import productImage2 from '../assets/latte.png' 
import productImage3 from '../assets/Affogato.png' 
import productImage4 from '../assets/macchiato.webp' 
import productImage5 from '../assets/Mocha.png' 
import productImage6 from '../assets/cappuccino.webp' 
import productImage7 from '../assets/iced coffee.webp'

const products = [
    {
        id: 1,
        name: "Mocha Bliss",
        description: "A perfect blend of chocolate and coffee.",
        price: "$12.99",
        image: productImage,
    },
    {
        id: 2,
        name: "Caramel Velvet Latte",
        description: "Silky smooth caramel latte.",
        price: "$14.99",
        image: productImage1,
    },
    {
        id: 3,
        name: "Hazelnut Brewmaster",
        description: "Rich hazelnut-flavored coffee.",
        price: "$11.99",
        image: productImage2,
    },
    {
        id: 4,
        name: "Espresso Delight",
        description: "Bold and aromatic espresso shot.",
        price: "$10.99",
        image: productImage3,
    },
    {
        id: 5,
        name: "Mocha Bliss",
        description: "A perfect blend of chocolate and coffee.",
        price: "$12.99",
        image: productImage4,
    },
    {
        id: 6,
        name: "Caramel Velvet Latte",
        description: "Silky smooth caramel latte.",
        price: "$14.99",
        image: productImage5,
    },
    {
        id: 7,
        name: "Hazelnut Brewmaster",
        description: "Rich hazelnut-flavored coffee.",
        price: "$11.99",
        image: productImage6,
    },
    {
        id: 8,
        name: "Espresso Delight",
        description: "Bold and aromatic espresso shot.",
        price: "$10.99",
        image: productImage7,
    },
]

const ProductGrid = () => {
    return (
        <section className="bg-gradient-to-r from-zinc-950 to-orange-950 py-20 px-10">
            <div className="container mx-auto">
                <h2 className="text-5xl font-extrabold text-white text-center mb-12">
                    Our Coffee Collection
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative bg-zinc-900 rounded-lg shadow-md overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500 group"
                            data-aos="fade-up"
                        >
                            <div className="relative">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-60 object-cover transition-all duration-300 group-hover:brightness-75"
                                />
                            </div>
                            <div className="p-4 text-white">
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-all">
                                    {product.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-orange-400 font-bold text-lg group-hover:text-orange-300 transition-all">
                                        {product.price}
                                    </span>
                                    <button
                                        className="bg-orange-600 hover:bg-orange-800 text-white py-2 px-4 rounded-full text-sm font-semibold transition-transform transform hover:scale-110"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <button className="mt-16 relative px-16 py-4 font-bold text-white text-lg rounded-full shadow-lg overflow-hidden group animate-gradient bg-gradient-to-r from-orange-700 via-red-800 to-orange-300-500 bg-[length:400%_400%] hover:scale-105 focus:outline-none">
                    <span className="relative z-10">Explore more</span>
                    <span className="absolute -inset-1 bg-gradient-to-r from-orange-700 to-orange-900 opacity-0 rounded-full group-hover:opacity-20 transition duration-500"></span>
                </button>
            </div>
        </section>
    )
}

export default ProductGrid
