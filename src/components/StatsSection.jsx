import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
    // triggerOnce: true ka matlab hai animation sirf ek baar chalega
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    const stats = [
        { count: 26, label: "Year Experience", suffix: "+" },
        { count: 10, label: "Happy Clients", suffix: "K+" },
        { count: 15, label: "Products Category", suffix: "+" },
        { count: 2000, label: "Established In", suffix: "" }
    ];

    return (
        <section
            ref={ref}
            className="relative py-20 bg-fixed bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/factory-bg.jpg')" }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            {/* Content Container */}
            <div className="relative container mx-auto px-10 text-center text-white z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 uppercase tracking-widest text-shadow-lg">
                    Numbers That Move Industries
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center transform transition-transform hover:scale-105 duration-300">
                            <span className="text-4xl md:text-5xl font-extrabold text-orange-500 drop-shadow-md">
                                {inView ? (
                                    <CountUp start={0} end={stat.count} duration={2.5} />
                                ) : (
                                    <span>0</span>
                                )}
                                {stat.suffix}
                            </span>
                            <p className="mt-2 font-semibold text-sm md:text-base tracking-wide uppercase opacity-90">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;