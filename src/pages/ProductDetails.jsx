import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // API_BASE_URL ko import se hi use karein, dubara declare na karein
    const UPLOADS_URL = `${API_BASE_URL}uploads/`;

    useEffect(() => {
        if (!id) return;

        fetch(`${API_BASE_URL}get_product_by_id.php?id=${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Backend se mila data:", data);
                if (data && !data.error) {
                    setProduct(data);
                } else {
                    setProduct(null);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fetch Error:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="py-20 text-center text-xl">Loading product details...</div>;
    if (!product) return <div className="py-20 text-center text-xl text-red-600">Product details not found!</div>;

    // Bullet points render karne ke liye helper function
    const renderPoints = (text) => {
        if (!text) return null;
        return (
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {text.split('|').map((item, index) => <li key={index}>{item.trim()}</li>)}
            </ul>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner Section */}
            <div className="relative h-[300px] w-full flex items-center justify-center bg-gray-900 bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/banner.jpg')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <h1 className="relative z-10 text-white text-5xl font-bold uppercase tracking-wider text-center px-4">
                    {product?.name}
                </h1>
            </div>

            <div className="py-16 px-10 container mx-auto">
                <h1 className="text-4xl font-bold text-blue-900 mb-8">{product?.name}</h1>

                {/* Main Content: Image + Description */}
                <div className="flex flex-col md:flex-row gap-12 bg-white p-8 rounded-lg shadow-md mb-10">
                    <div className="w-full md:w-1/2">
                        <img src={`${UPLOADS_URL}${product?.image}`} alt={product?.name} className="w-full h-auto rounded-lg shadow-lg object-cover" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="font-bold text-gray-800 text-xl mb-3 border-b pb-2">Description:</h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">{product?.description}</p>
                        <button onClick={() => navigate('/enquiry')} className="bg-blue-900 text-white px-10 py-4 rounded-lg font-bold hover:bg-orange-600 transition">Enquire Now</button>
                    </div>
                </div>

                {/* Conditional Dynamic Sections: Features, Applications, Benefits */}
                <div className="grid md:grid-cols-3 gap-8">
                    {product?.features && (
                        <div className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-500">
                            <h3 className="text-xl font-bold text-blue-800 mb-4">Key Features</h3>
                            {renderPoints(product.features)}
                        </div>
                    )}
                    {product?.applications && (
                        <div className="bg-white p-6 rounded-lg shadow border-t-4 border-green-500">
                            <h3 className="text-xl font-bold text-blue-800 mb-4">Applications</h3>
                            {renderPoints(product.applications)}
                        </div>
                    )}
                    {product?.benefits && (
                        <div className="bg-white p-6 rounded-lg shadow border-t-4 border-orange-500">
                            <h3 className="text-xl font-bold text-blue-800 mb-4">Benefits</h3>
                            {renderPoints(product.benefits)}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;