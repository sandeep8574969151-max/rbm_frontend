import React from 'react';

const WhatsAppButton = () => {
    // Phone number mein se spaces hatane ke liye .replace() ka use kiya hai
    const rawPhoneNumber = "95400 04354";
    const phoneNumber = rawPhoneNumber.replace(/\s/g, '');
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello, I am interested in your services.`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 animate-bounce"
        >
            {/* WhatsApp Icon */}
            <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.591 5.52 0 10.019-4.499 10.019-10.02 0-5.52-4.499-10.02-10.019-10.02-5.521 0-10.02 4.499-10.02 10.02 0 2.052.576 3.827 1.602 5.461l-1.018 3.738 3.864-1.014z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;