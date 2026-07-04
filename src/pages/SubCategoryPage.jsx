import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config'; // Sahi config import

const SubCategoryPage = () => {
    const { subCategory } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // API_BASE_URL ka direct istemal
        fetch(`${API_BASE_URL}get_products_by_sub.php?sub_category=${encodeURIComponent(subCategory)}`)
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data) && data.length > 0) {
                    setProduct(data[0]);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fetch Error:", err);
                setLoading(false);
            });
    }, [subCategory]);

    if (loading) return <div className="text-center py-20">Loading...</div>;
    if (!product) return <div className="text-center py-20">No details found.</div>;

    // List render karne ka function
    const renderList = (text) => {
        if (!text) return null;
        return (
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {text.split('|').map((item, index) => <li key={index}>{item.trim()}</li>)}
            </ul>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner */}
            <div className="relative h-[300px] w-full flex items-center justify-center bg-gray-800 bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/banner.jpg')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative z-10 text-white text-5xl font-bold uppercase">{product.name}</h1>
            </div>

            <div className="py-16 px-10 container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-start bg-white p-8 rounded-lg shadow-md">
                    {/* Image Section */}
                    <div>
                        <img
                            // URL ke liye API_BASE_URL ka sahi istemal
                            src={`${API_BASE_URL}uploads/${product.image}`}
                            alt={product.name}
                            className="w-full h-auto rounded-lg shadow-lg"
                            onError={(e) => e.target.src = "https://via.placeholder.com/500"}
                        />
                    </div>

                    {/* Content Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-orange-500 pl-4">Product Description</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">{product.description}</p>

                        {/* Dynamic Sections */}
                        {product.features && <div className="mb-4"><h4 className="font-bold">Key Features:</h4>{renderList(product.features)}</div>}
                        {product.applications && <div className="mb-4"><h4 className="font-bold">Applications:</h4>{renderList(product.applications)}</div>}

                        <button onClick={() => navigate('/enquiry')} className="bg-orange-500 text-white px-8 py-3 rounded font-bold hover:bg-orange-600 transition">ENQUIRY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryPage;