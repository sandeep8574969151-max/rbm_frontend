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
        fetch(`${API_BASE_URL}/get_banners.php`)
            .then(res => res.json())
            .then(data => {
                setBanners(data);
                setDebug(data.length > 0 ? "Data Loaded" : "Data Empty");
            })
            .catch(err => setDebug("Error: " + err.message));
    }, []);

    return (
        // Mobile ke liye height kam rakhi hai (h-[300px]), aur laptop/desktop ke liye badi (md:h-[70vh])
        <section className="relative w-full h-[300px] md:h-[70vh] bg-gray-200">
            {banners.length === 0 && (
                <div className="absolute top-0 left-0 p-4 z-50 bg-red-500 text-white text-xs">
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
                                    src={`${API_BASE_URL}/uploads/${banner.imageUrl}`}
                                    alt={banner.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/1920x1080'; }}
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    {/* Mobile ke liye text size chhota (text-2xl) aur desktop ke liye bada (md:text-5xl) */}
                                    <h1 className="text-2xl md:text-5xl font-bold text-white uppercase text-center px-4">
                                        {banner.title}
                                    </h1>
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