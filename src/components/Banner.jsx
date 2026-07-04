import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [banners, setBanners] = useState([]);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true); // Loading state add kiya

    // Backend Base URL
    const baseUrl = "https://rbm-backend-1.onrender.com";

    useEffect(() => {
        setLoading(true);
        fetch(`${baseUrl}/get_banners.php`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                // Agar data array hai, toh set karein
                if (Array.isArray(data)) {
                    setBanners(data);
                } else {
                    console.error("Backend se array nahi mila:", data);
                    setBanners([]);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching banners:", err);
                setLoading(false);
            });
    }, []);

    // Auto-slide logic
    useEffect(() => {
        if (banners.length === 0) return;
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % banners.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [banners]);

    if (loading) {
        return <div className="flex justify-center items-center h-[400px]">Loading...</div>;
    }

    return (
        <div className="relative w-full h-[400px] overflow-hidden bg-gray-100">
            {banners.length > 0 ? (
                banners.map((item, i) => (
                    <div
                        key={item.id || i}
                        className={`absolute w-full transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={item.imageUrl.startsWith('http') ? item.imageUrl : `${baseUrl}/${item.imageUrl}`}
                            alt={item.title || "Banner"}
                            className="w-full h-[400px] object-cover"
                            onError={(e) => { e.target.src = '/placeholder.jpg'; }}
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/30">
                            <h2 className="text-white text-4xl font-bold px-4 text-center">{item.title}</h2>
                        </div>
                    </div>
                ))
            ) : (
                <div className="flex justify-center items-center h-full text-gray-500">
                    No Banners Found - Database check karein
                </div>
            )}
        </div>
    );
};

export default Banner;