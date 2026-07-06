import React, { useState } from 'react';
import { API_BASE_URL } from '../config';

const Enquire = () => {
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', subject: '', message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        try {
            const response = await fetch('export const API_BASE_URL = "https://your-unique-render-url.onrender.com/";/rbm_backend/save_enquiry.php', {
                method: 'POST',
                body: data // FormData automatic headers set kar deta hai
            });

            const result = await response.json();

            if (result.status === "success") {
                alert("Enquiry submitted successfully!");
                setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
            } else {
                alert("Error: " + result.error);
            }
        } catch (error) {
            console.error("Error submitting enquiry:", error);
            alert("Server connection error. Check if XAMPP is running and PHP file is correct.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner Section */}
            <div
                className="relative h-[300px] w-full flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/banner.jpg')" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative z-10 text-white text-5xl font-bold uppercase tracking-wider text-center px-4">
                    Enquiry
                </h1>
            </div>


            <div className="py-16 px-6">
                <div className="max-w-4xl mx-auto bg-[#0f3460] p-10 rounded-2xl shadow-2xl">
                    <h2 className="text-white text-3xl font-bold text-center mb-8">Send Us Your Enquiry</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} className="w-full p-4 rounded bg-white" required />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} className="w-full p-4 rounded bg-white" required />
                            <input name="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} className="w-full p-4 rounded bg-white" required />
                        </div>

                        <input name="subject" placeholder="Subject" onChange={handleChange} value={formData.subject} className="w-full p-4 rounded bg-white" required />

                        <textarea name="message" placeholder="Message" onChange={handleChange} value={formData.message} className="w-full p-4 rounded bg-white h-40" required />

                        <button type="submit" className="w-full bg-black text-white py-4 font-bold text-lg hover:bg-gray-800 transition">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Enquire;