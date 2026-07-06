import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const BlogDetails = () => {
    const { id } = useParams(); // URL se blog ki ID milegi
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        // Apne backend se specific blog ka data fetch karein
        fetch(`https://api.yourdomain.com/api/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => setBlog(data))
            .catch((err) => console.error("Error:", err));
    }, [id]);

    if (!blog) return <div className="py-20 text-center">Loading...</div>;

    return (
        <div className="py-16 px-10 container mx-auto">
            {/* Blog Image */}
            <img src={blog.image} alt={blog.title} className="w-full h-[400px] object-cover rounded-lg mb-8" />

            {/* Title & Meta */}
            <h1 className="text-4xl font-bold text-[#002b5b] mb-4">{blog.title}</h1>
            <p className="text-orange-500 font-bold mb-6">{blog.date}</p>

            {/* Full Content */}
            <div className="prose lg:prose-xl text-gray-700 leading-relaxed">
                <p>{blog.content}</p>
            </div>
        </div>
    );
};

export default BlogDetails;