import React from 'react';
import Products from '../components/Products'; // Yahan apna path check karein

const ProductsPage = () => {
    return (
        <div className="pt-20">
            <h1 className="text-center text-4xl font-bold mb-10">Our Products</h1>
            <Products /> {/* Yahan aapka component aa gaya */}
        </div>
    );
};

export default ProductsPage;