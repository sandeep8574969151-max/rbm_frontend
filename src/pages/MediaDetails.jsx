import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MediaDetails = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        console.log("Fetching data for ID:", id);
        // Yahan aap API call karenge
    }, [id]);

    return (
        <div className="py-16 px-10 container mx-auto">
            <h1 className="text-4xl font-bold text-[#002b5b] mb-4">News Title Here</h1>
            <p className="text-gray-500 mb-8">Published on: June 25, 2026</p>
            <img src="/news-banner.jpg" alt="News" className="w-full h-[400px] object-cover rounded-lg mb-8" />
            <div className="prose lg:prose-xl text-gray-700">
                <p> news content here</p>
            </div>
        </div>
    );
};

export default MediaDetails;