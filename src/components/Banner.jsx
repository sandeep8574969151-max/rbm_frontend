import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [banners, setBanners] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Local file ke jagah Railway backend ka URL daalein
        fetch("https://rbmbackend-production.up.railway.app/get_banners.php")
            .then(res => res.json())
            .then(data => {
                console.log("Banners data:", data); // Check karne ke liye
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
            {banners.map((item, i) => (
                <div
                    key={item.id}
                    className={`absolute w-full transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                >
                    {/* Database image path check karein: Agar path sirf database mein hai, toh baseURL add karein */}
                    <img
                        src={`https://rbmbackend-production.up.railway.app/${item.imageUrl}`}
                        alt={item.title}
                        className="w-full h-[400px] object-cover"
                    />
                    <h2 className="absolute top-10 left-10 text-white text-4xl font-bold">{item.title}</h2>
                </div>
            ))}
        </div>
    );
};

export default Banner;