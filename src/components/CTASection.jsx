import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <section className="py-16 px-10 bg-white text-center">
            <h2 className="text-3xl font-bold text-[#002b5b] mb-4">
                Upgrade Your Floors with High-Quality Epoxy Coating
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 mb-8">
                Durable, chemical-resistant and ultra-glossy finishes designed for factories, warehouses, showrooms, and commercial spaces.
                We deliver long-lasting flooring that performs under pressure.
            </p>
            <Link to="/contact" className="bg-orange-500 text-white px-8 py-3 rounded font-bold hover:bg-orange-600 transition">
                Contact Now
            </Link>
        </section>
    );
};

export default CTASection;