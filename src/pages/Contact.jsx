import React, { useState } from 'react';
import { API_BASE_URL } from '../config';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', subject: '', message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));

        try {
            const response = await fetch('export const API_BASE_URL = "https://your-unique-render-url.onrender.com/";/rbm_backend/save_enquiry.php', {
                method: 'POST',
                body: data
            });
            const result = await response.json();
            if (result.status === "success") {
                alert("Message Sent Successfully!");
                setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
            } else {
                alert("Error: " + result.error);
            }
        } catch (error) {
            alert("Server connection error.");
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
                    contact us
                </h1>
            </div>


            <div className="py-16 px-6 container mx-auto">
                <h1 className="text-4xl font-bold text-[#002b5b] mb-10 text-center">Contact RBM Chemicals</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info & Address */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-[#002b5b]">Get In Touch</h2>
                        <p><strong>Managing Director:</strong> Mahesh Yadav</p>
                        <p><strong>Phone:</strong>  +91 95400 04354</p>
                        <p><strong>Email:</strong> rbmchemicalsandsolutionsllp@gmail.in</p>
                        <p><strong>Address:</strong> Plot No. G1-123A, RIICO Industrial Area Khushkhera, Bhiwadi, Khairthal Tijara, Rajasthan - 301707</p>

                        {/* Google Map */}
                        <div className="w-full h-64 mt-6">
                            <iframe
                                title="RBM Chemicals Location"
                                className="w-full h-full rounded-lg shadow-md"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.3242088656686!2d76.8152520755026!3d28.41724037578275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d52d9697925%3A0x6b45a278964177b9!2sRIICO%20Industrial%20Area%2C%20Khushkhera%2C%20Rajasthan%20301707!5e0!3m2!1sen!2sin!4v1719665000000!5m2!1sen!2sin"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg border border-gray-200">
                        <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} className="w-full p-3 mb-4 border rounded" required />
                        <div className="grid grid-cols-2 gap-4">
                            <input name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} className="w-full p-3 mb-4 border rounded" required />
                            <input name="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} className="w-full p-3 mb-4 border rounded" required />
                        </div>
                        <input name="subject" placeholder="Subject" onChange={handleChange} value={formData.subject} className="w-full p-3 mb-4 border rounded" required />
                        <textarea name="message" placeholder="Message" onChange={handleChange} value={formData.message} className="w-full p-3 mb-4 border rounded h-32" required />
                        <button type="submit" className="w-full bg-[#002b5b] text-white p-3 rounded font-bold hover:bg-blue-900 transition">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;