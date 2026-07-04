import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`export const API_BASE_URL = "https://your-unique-render-url.onrender.com/";get_products_by_sub.php?category=${encodeURIComponent(categoryName)}`)
            .then(res => res.json())
            .then(data => {
                // Agar array mein data mila, toh pehla product set karein
                if (Array.isArray(data) && data.length > 0) {
                    setProduct(data[0]);
                } else {
                    setProduct(null);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error:", err);
                setLoading(false);
            });
    }, [categoryName]);

    if (loading) return <div className="text-center py-20 text-xl">Loading Product Details...</div>;
    if (!product) return <div className="text-center py-20 text-xl">Product not found.</div>;

    // Helper function to render list items from pipe separated strings
    const renderList = (text) => {
        if (!text) return null;
        return (
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {text.split('|').map((item, index) => <li key={index}>{item.trim()}</li>)}
            </ul>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner Section */}
            <div className="relative h-[300px] w-full flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/banner.jpg')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative z-10 text-white text-5xl font-bold uppercase tracking-wider text-center px-4">
                    {product.name}
                </h1>
            </div>

            <div className="container mx-auto py-16 px-10">
                {/* Main Content Grid */}
                <div className="bg-white p-10 rounded-xl shadow-lg grid md:grid-cols-2 gap-12 mb-12">
                    <img
                        src={`export const API_BASE_URL = "https://your-unique-render-url.onrender.com/";uploads/${product.image}`}
                        alt={product.name}
                        className="w-full rounded-lg shadow-md object-cover"
                    />
                    <div>
                        <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-orange-500 pl-4">Product Description</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-8">{product.description}</p>
                        <button onClick={() => window.location.href = '/enquiry'}
                            className="bg-orange-500 text-white px-10 py-4 rounded font-bold text-lg hover:bg-orange-600 transition shadow-lg">
                            ENQUIRY NOW
                        </button>
                    </div>
                </div>

                {/* New Sections: Features, Applications, Benefits */}
                <div className="grid md:grid-cols-3 gap-8">
                    {product.features && (
                        <div className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-500">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">Key Features</h3>
                            {renderList(product.features)}
                        </div>
                    )}
                    {product.applications && (
                        <div className="bg-white p-6 rounded-lg shadow border-t-4 border-green-500">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">Applications</h3>
                            {renderList(product.applications)}
                        </div>
                    )}
                    {product.benefits && (
                        <div className="bg-white p-6 rounded-lg shadow border-t-4 border-orange-500">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">Benefits</h3>
                            {renderList(product.benefits)}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;