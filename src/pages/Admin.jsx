import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';

const Admin = () => {
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    // Fetch Categories for Dropdown
    const fetchCategories = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}get_all_categories.php`);
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const data = await res.json();
            setCategories(data);
        } catch (err) {
            console.error("Error fetching categories:", err);
            setCategories([]);
        }
    };

    useEffect(() => { fetchCategories(); }, []);

    // Helper for API Calls
    const postData = async (endpoint, formData) => {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) throw new Error("Server Error: " + response.status);
            return await response.text();
        } catch (error) {
            return "Error: " + error.message;
        }
    };

    return (
        <div className="p-10 max-w-5xl mx-auto space-y-12 bg-gray-50">
            <h1 className="text-3xl font-extrabold text-center text-gray-800">Admin Dashboard</h1>

            {/* 1. Category Manager */}
            <div className="bg-white p-6 shadow-md rounded border">
                <h2 className="text-2xl font-bold mb-5 text-gray-700">Add New Category</h2>
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const res = await postData("add_category.php", new FormData(e.target));
                    alert(res); e.target.reset(); fetchCategories();
                }} className="flex gap-4">
                    <input type="text" name="cat_name" placeholder="Category Name" className="border p-2 w-full rounded" required />
                    <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Add</button>
                </form>
            </div>

            {/* 2. Upload General Product */}
            <div className="bg-white p-6 shadow-md rounded border-t-4 border-blue-500">
                <h2 className="text-2xl font-bold mb-5 text-blue-700">Upload General Product</h2>
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const res = await postData("upload_product.php", new FormData(e.target));
                    alert(res); e.target.reset();
                }} className="space-y-4">
                    <input type="hidden" name="product_type" value="general" />
                    <input type="text" name="name" placeholder="Product Name" className="border p-2 w-full rounded" required />
                    <textarea name="description" placeholder="Product Description" className="border p-2 w-full h-24 rounded" required />
                    <input type="file" name="image" className="border p-2 w-full rounded" required />
                    <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded w-full hover:bg-blue-700">Upload General Product</button>
                </form>
            </div>

            {/* 3. Upload Sub-Category Product */}
            <div className="bg-white p-6 shadow-md rounded border-t-4 border-green-500">
                <h2 className="text-2xl font-bold mb-5 text-green-700">Upload Sub-Category Product</h2>
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const res = await postData("upload_sub_product.php", new FormData(e.target));
                    alert(res);
                    e.target.reset();
                    setCategory('');
                }} className="space-y-4">
                    <input type="text" name="name" placeholder="Product Name" className="border p-2 w-full rounded" required />
                    <textarea name="description" placeholder="Product Description" className="border p-2 w-full h-24 rounded" required />
                    <textarea name="features" placeholder="Key Features" className="border p-2 w-full"></textarea>
                    <textarea name="applications" placeholder="Applications" className="border p-2 w-full"></textarea>
                    <textarea name="benefits" placeholder="Benefits" className="border p-2 w-full"></textarea>

                    <select name="category" className="border p-2 w-full rounded" required value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select Category</option>
                        {categories.map((cat, i) => (
                            <option key={i} value={cat.category_name || cat}>{cat.category_name || cat}</option>
                        ))}
                    </select>

                    <input type="text" name="sub_category" placeholder="Sub-Category Name (Optional)" className="border p-2 w-full rounded" />
                    <input type="file" name="image" className="border p-2 w-full rounded" required />
                    <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded w-full hover:bg-green-700">Upload Product</button>
                </form>
            </div>
        </div>
    );
};

export default Admin;