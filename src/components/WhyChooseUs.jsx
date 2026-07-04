import React from 'react';
import { motion } from 'framer-motion';

const features = [
    { title: "Total Solutions", desc: "We provide end-to-end solutions for new floors and troubleshooting old floors with expert site visits." },
    { title: "Machinery Support", desc: "We provide latest machines & tools for application of jobs that ensure high-quality finishes." },
    { title: "Right Specification", desc: "Expert guidance in selecting the right chemical specifications for long-lasting performance." },
    { title: "After Sale Service", desc: "Our after-sale service is the backbone of our customer relationships and trust." }
];

const WhyChooseUs = () => {
    return (
        <section className="relative py-20 px-10 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/factory-bg.jpg')" }}>
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            <div className="relative container mx-auto text-center text-white">
                <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
                <p className="mb-16 opacity-90">Quality, Innovation, and Trust – Chemistry for a better tomorrow.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-left"
                        >
                            <h3 className="text-xl font-bold mb-3 text-blue-900">{item.title}</h3>
                            <p className="text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;