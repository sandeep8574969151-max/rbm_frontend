import React from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const About = () => {
    return (
        <>
            {/* Banner Section (Conpro Style) */}
            <div className="relative h-[350px] w-full overflow-hidden">
                {/* Banner Image */}
                <img
                    src="/banner-image.jpg"
                    alt="About Us Banner"
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-900/60 flex flex-col items-center justify-center text-white">
                    <h1 className="text-5xl font-bold mb-2">ABOUT US</h1>
                    <p className="text-lg opacity-90 tracking-widest uppercase">Home | About Us</p>
                </div>
            </div>

            {/* Overview Section */}
            <section className="py-16 px-10 container mx-auto flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/3">
                    <img
                        src="/about-image.jpg"
                        alt="About RBM"
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-[#002b5b] mb-4">About RBM Chemicals and Solutions LLP</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        RBM Chemicals and Solutions LLP delivers premium construction chemicals, waterproofing solutions, and high-grade epoxy/PU floor coatings.
                        We believe in quality, innovation, and trust, providing world-class products to our esteemed customers.
                    </p>
                    <Link to="/contact" className="bg-orange-500 text-white px-6 py-3 rounded font-bold hover:bg-orange-600 transition">
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gray-50 py-16 px-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-[#002b5b] mb-8">Why Choose RBM Chemicals?</h2>
                    <ul className="space-y-4 text-gray-700 list-disc pl-5">
                        <li>Superior chemical and thermal resistance tailored for heavy-duty industrial needs.</li>
                        <li>Specialized abrasion-resistant flooring systems for high-footfall and industrial traffic.</li>
                        <li>High-impact resistant solutions designed for areas with heavy machinery and forklift movement.</li>
                        <li>Advanced UV-resistant formulations to prevent chalking and degradation in exterior applications.</li>
                        <li>Standard 1-5 year material warranties with professional installation expectations.</li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default About;