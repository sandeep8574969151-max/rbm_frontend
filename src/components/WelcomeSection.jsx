import React from 'react';

const WelcomeSection = () => {
    return (
        <section className="py-20 px-10 bg-gray-50 text-center">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#002b5b] mb-4">
                WELCOME TO RBM CHEMICALS AND SOLUTIONS LLP
            </h2>
            {/* Red underline */}
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>

            {/* Description */}
            <div className="max-w-4xl mx-auto">
                <p className="text-gray-700 text-lg leading-relaxed">
                    At <strong>RBM Chemicals and Solutions LLP</strong>, we believe in
                    <span className="text-orange-500 font-bold"> Quality | Innovation | Trust</span>.
                    We are dedicated to providing high-performance chemical solutions tailored to meet the evolving needs of modern industries.
                    As a trusted partner, we ensure excellence in every product we deliver, helping businesses sustain their industrial
                    workflows with efficiency and precision. Explore our range of solutions and connect with us for expert guidance
                    and instant support.
                </p>
            </div>
        </section>
    );
};

export default WelcomeSection;