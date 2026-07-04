import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-10 flex flex-col md:flex-row items-center gap-12">

                {/* Left Side: Animated Image */}
                <div className="md:w-1/2 animate-slide-left">
                    <div className="overflow-hidden rounded-lg shadow-xl h-[400px]">
                        <img
                            src="/about-image.jpg"
                            alt="About RBM Chemicals"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                    </div>
                </div>

                {/* Right Side: Animated Text */}
                <div className="md:w-1/2 animate-slide-right">
                    <h2 className="text-4xl font-bold text-[#002b5b] mb-6 border-l-4 border-orange-500 pl-4">
                        About RBM Chemicals
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        RBM Chemicals and Solutions LLP is committed to delivering excellence in the chemical industry.
                        We provide a wide range of construction chemicals, waterproofing solutions, and high-quality
                        industrial coatings designed for long-lasting performance.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        With a focus on <strong className="text-[#002b5b]">Quality, Innovation, and Trust</strong>, we serve
                        as a reliable partner for industrial floor treatments and rehabilitation of structures
                        suffering from leakages and cracks.
                    </p>
                    <Link to="/about">
                        <button className="bg-orange-500 text-white px-8 py-3 font-bold hover:bg-orange-600 shadow-lg transition-all hover:shadow-orange-200">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;