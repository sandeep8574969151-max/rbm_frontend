import React from 'react';

const Contact = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-blue-900 text-center mb-12 uppercase">Get In Touch</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left: Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-blue-900">Contact Details</h3>
                        <p className="text-gray-700">Feel free to reach out to us for any chemical solutions or industrial flooring requirements.</p>

                        <div className="space-y-4 mt-6">
                            <p><strong>📍 Address:</strong> Anand Industrial Estate, Ghaziabad, UP</p>
                            <p><strong>📞 Phone:</strong> +91 9253412469</p>
                            <p><strong>✉️ Email:</strong> rbmchemicalsandsolutionsllp@gmail.com</p>
                        </div>
                    </div>

                    {/* Right: Enquiry Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded" />
                            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded" />
                            <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded h-32"></textarea>
                            <button className="w-full bg-orange-500 text-white py-3 font-bold hover:bg-orange-600 transition">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;