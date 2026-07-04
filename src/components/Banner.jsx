import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [banners, setBanners] = useState([]);
    const [index, setIndex] = useState(0);

    // Backend Base URL
    const baseUrl = "https://rbm-backend-1.onrender.com";

    useEffect(() => {
        fetch(`${baseUrl}/get_banners.php`)
            .then(res => res.json())
            .then(data => setBanners(data))
            .catch(err => console.error("Error fetching banners:", err));
    }, []);

    // Auto-slide logic
    useEffect(() => {
        if (banners.length === 0) return;
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % banners.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [banners]);

    return (
        <div className="relative w-full h-[400px] overflow-hidden">
            {banners.length > 0 ? (
                banners.map((item, i) => (
                    <div
                        key={item.id}
                        className={`absolute w-full transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            // Yahan variable ka naam 'baseUrl' rakha hai
                            src={`${baseUrl}/${item.imageUrl}`}
                            alt={item.title}
                            className="w-full h-[400px] object-cover"
                            onError={(e) => { e.target.src = '/placeholder.jpg'; }}
                        />
                        <h2 className="absolute top-10 left-10 text-white text-4xl font-bold">{item.title}</h2>
                    </div>
                ))
            ) : (
                <div className="flex justify-center items-center h-full text-gray-500">
                    No Banners Found
                </div>
            )}
        </div>
    );
};

export default Banner;