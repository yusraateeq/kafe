import React from 'react';

const OfferSection = () => {
    return (
        <section className="bg-gradient-to-r from-zinc-950 to-zinc-900 py-20 px-10">
            <div className="max-w-5xl mx-auto text-center text-white">
                <h2 className="text-4xl font-bold mb-6">Limited Time Offer!</h2>
                <p className="text-lg mb-8">
                    Get 15% off on your first purchase! Join the Coffee Grove family and enjoy the finest blends.
                </p>
                <button className="bg-orange-600 hover:bg-orange-800 text-white py-3 px-8 rounded-full text-xl font-semibold transition-all">
                    Claim Your Offer
                </button>
                <p className="text-gray-400 mt-4">
                    Offer valid for a limited time only. Do not miss out!
                </p>
            </div>
        </section>
    );
};

export default OfferSection;
