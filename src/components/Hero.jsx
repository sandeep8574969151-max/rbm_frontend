import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { API_BASE_URL } from '../config';


const Hero = () => {
    const [banners, setBanners] = useState([]);
    const [debug, setDebug] = useState("Loading...");

    useEffect(() => {
        // String template literals (${}) ka use karein
        fetch(`${API_BASE_URL}get_banners.php`)
            .then(res => res.json())
            .then(data => {
                console.log("Full Data:", data);
                setBanners(data);
                setDebug(data.length > 0 ? "Data Loaded" : "Data Empty");
            })
            .catch(err => {
                console.error(err);
                setDebug("Error: " + err.message);
            });
    }, []);

    return (
        <section className="relative w-full h-[70vh] bg-gray-200">
            {/* DEBUGGER: Agar banner nahi dikhe toh ye text screen par dikhega */}
            {banners.length === 0 && (
                <div className="absolute top-0 left-0 p-4 z-50 bg-red-500 text-white">
                    Debug: {debug}
                </div>
            )}

            {banners.length > 0 ? (
                <Swiper
                    modules={[Navigation, Autoplay, EffectFade]}
                    navigation={true}
                    autoplay={{ delay: 5000 }}
                    effect="fade"
                    className="w-full h-full"
                >
                    {banners.map((banner) => (
                        <SwiperSlide key={banner.id}>
                            <div className="w-full h-full relative">
                                <img
                                    src={`export const API_BASE_URL = "https://your-unique-render-url.onrender.com/";${banner.imageUrl}`}
                                    alt={banner.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h1 className="text-5xl font-bold text-white uppercase">{banner.title}</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <p>No Banners Found</p>
                </div>
            )}
        </section>
    );
};

export default Hero;