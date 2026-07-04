import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // API call
        fetch(`${API_BASE_URL}/get_gallery.php`)
            .then((res) => res.json())
            .then((data) => {
                // Agar data array hai toh use karein, warna empty array
                setImages(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching gallery:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="py-20 text-center text-xl">Loading Gallery...</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner Section */}
            <div
                className="relative h-[300px] w-full flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/banner.jpg')" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative z-10 text-white text-5xl font-bold uppercase tracking-wider text-center px-4">
                    Our Gallery
                </h1>
            </div>

            {/* Gallery Grid Section */}
            <section className="py-16 px-6 container mx-auto">
                <h2 className="text-3xl font-bold text-blue-900 mb-12 border-l-4 border-orange-500 pl-4">
                    Project Gallery
                </h2>

                {images.length === 0 ? (
                    <p className="text-center text-gray-500 text-xl">No images found.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {images.map((item, index) => {
                            // Backend se milne wala path (e.g., "uploads/image.jpg")
                            const rawPath = item.imageUrl || "";

                            // Final Path Logic:
                            // Agar full URL hai toh wahi, warna API_BASE_URL + rawPath
                            const imagePath = rawPath.startsWith('http')
                                ? rawPath
                                : `${API_BASE_URL}/${rawPath}`;

                            return (
                                <div key={index} className="rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
                                    <img
                                        src={imagePath}
                                        alt={`Project ${index}`}
                                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/300?text=Image+Not+Found';
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Gallery;