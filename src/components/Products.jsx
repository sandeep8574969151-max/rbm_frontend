import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from './config';

const Products = () => {
    // Railway ka correct API URL


    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        // Sirf ek baar sahi URL se fetch karein
        fetch(`${API_BASE_URL}get_products.php`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                console.log("Products loaded:", data);
                setProducts(Array.isArray(data) ? data : []);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
            });
    }, []);

    const displayProducts = showAll ? products : products.slice(0, 3);

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800">
                    Product Collection
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayProducts.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white shadow-lg border p-4 rounded-lg overflow-hidden"
                        >
                            <img
                                // Railway se image fetch karne ka sahi path
                                src={`${API_BASE_URL}uploads/${item.image}`}
                                alt={item.name}
                                className="w-full h-64 object-cover rounded"
                                onError={(e) => { e.target.onerror = null; e.target.src = '/assets/placeholder.jpg'; }}
                            />

                            <h3 className="text-2xl font-semibold mt-4 text-gray-800">{item.name}</h3>

                            <Link
                                to={`/product/${item.id}`}
                                className="mt-4 block bg-orange-500 text-white py-2 text-center rounded hover:bg-orange-600 transition"
                            >
                                Explore More
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {products.length > 3 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-gray-800 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-black transition duration-300"
                        >
                            {showAll ? "Show Less" : "View All Products"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Products;