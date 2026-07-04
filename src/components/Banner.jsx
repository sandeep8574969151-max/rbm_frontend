import React, { useState, useEffect } from 'react';
// Import path confirm kar lein ki aapke project structure ke hisaab se sahi hai
import { API_BASE_URL } from '../../config';

const Banner = () => {
    const [banners, setBanners] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Render Backend se data fetch karna
        fetch(`${API_BASE_URL}/get_banners.php`)
            .then(res => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then(data => {
                console.log("Banners data:", data);
                setBanners(data);
            })
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
                            src={`${API_BASE_URL}/${item.imageUrl}`}
                            alt={item.title}
                            className="w-full h-[400px] object-cover"
                            // Public folder mein default image rakhein ya path sahi karein
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