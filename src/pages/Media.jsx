import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Media = () => {
    // Backend se data fetch karne ke liye (Jaise Gallery mein kiya tha)
    const [mediaItems, setMediaItems] = useState([
        { id: 1, title: "RBM Chemicals Awarded for Excellence", date: "June 20, 2026", desc: "We are proud to receive the Industrial Excellence Award...", link: "#" },
        { id: 2, title: "New Epoxy Innovation Launch", date: "May 15, 2026", desc: "Introducing our next-generation chemical resistant coatings.", link: "#" },
        { id: 3, title: "Media Coverage in Industrial Times", date: "April 10, 2026", desc: "Read about our sustainable manufacturing practices.", link: "#" }
    ]);

    return (
        <>
            {/* Banner Section */}
            <div className="relative h-[300px] w-full overflow-hidden">
                <img src="/banner-image.jpg" alt="Media Banner" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-blue-900/60 flex flex-col items-center justify-center text-white">
                    <h1 className="text-5xl font-bold mb-2">MEDIA & UPDATES</h1>
                    <p className="text-lg opacity-90 tracking-widest uppercase">Home | Media</p>
                </div>
            </div>

            {/* Media Content Section */}
            <section className="py-16 px-6 container mx-auto">
                <h2 className="text-3xl font-bold text-[#002b5b] text-center mb-12">Latest News & Press Releases</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mediaItems.map((item) => (
                        <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-xl transition duration-300">
                            <span className="text-orange-500 text-sm font-bold uppercase">{item.date}</span>
                            <h3 className="text-xl font-bold text-[#002b5b] mt-2 mb-4">{item.title}</h3>
                            <p className="text-gray-600 mb-6">{item.desc}</p>
                            <Link
                                to={`/media/${item.id}`}
                                className="text-[#002b5b] font-bold border-b-2 border-orange-500 pb-1 hover:text-orange-600 transition"
                            >
                                Read More →
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Media;