import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const Blog = () => {
    // Backend se data fetch karne ke liye state
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Yahan apne admin panel/backend ki API URL daalein
        fetch('https://api.yourdomain.com/api/blogs')
            .then((res) => res.json())
            .then((data) => setBlogs(data))
            .catch((err) => console.error("Error fetching blogs:", err));
    }, []);

    return (
        <>
            {/* Banner Section */}
            <div className="relative h-[300px] w-full overflow-hidden">
                <img src="/banner-image.jpg" alt="Blog Banner" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-blue-900/60 flex flex-col items-center justify-center text-white">
                    <h1 className="text-5xl font-bold mb-2">OUR BLOGS</h1>
                </div>
            </div>

            {/* Blog Grid Section */}
            <section className="py-16 px-6 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                            <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <span className="text-orange-500 text-sm font-bold">{blog.date}</span>
                                <h3 className="text-xl font-bold text-[#002b5b] mt-2 mb-4">{blog.title}</h3>
                                <p className="text-gray-600 mb-6">{blog.excerpt}...</p>
                                <Link
                                    to={`/blog/${blog.id}`}
                                    className="text-[#002b5b] font-bold border-b-2 border-orange-500 hover:text-orange-600"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Blog;