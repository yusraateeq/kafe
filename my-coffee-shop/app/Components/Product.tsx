import React from 'react'
import Image from 'next/image'
import productImage from '../assets/cup-of-tea.png'

const ProductSale = () => {
    return (
        <section className="bg-gradient-to-r from-zinc-950 to-zinc-900 py-20 px-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                <div 
                    className="relative w-full md:w-1/2 overflow-hidden rounded-lg"
                    data-aos="fade-right"
                >
                    <Image 
                        src={productImage} 
                        alt="Coffee Product" 
                        width={600} 
                        height={400} 
                        className="transform transition-transform duration-500 hover:scale-105"
                    />
                </div>

                <div 
                    className="w-full md:w-1/2 text-white"
                    data-aos="fade-left"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Premium Espresso Blend
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        Experience the rich and bold flavors of our Premium Espresso Blend. Hand-picked beans, expertly roasted to perfection, offering you a cup that’s smooth, full-bodied, and aromatic.
                    </p>
                    <p className="text-orange-400 text-2xl font-semibold mb-4">
                        Only $14.99
                    </p>
                    <button 
                        className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProductSale
