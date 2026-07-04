import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    // Scroll to top function
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-black/90 text-gray-300 py-12 overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url('/footer-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

            <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Column 1: Logo & Social */}
                <div className="space-y-4">
                    <img src="/rbm-logo.png" alt="RBM Logo" className="w-32 bg-white p-2 rounded" />
                    <p className="text-sm">Chemistry for a better tomorrow. Trusted Industrial Solutions.</p>
                </div>

                {/* Column 2: Explore */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-4">Explore</h4>
                    <ul className="space-y-2">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About Us', path: '/about' },
                            { name: 'Our Products', path: '/products' },
                            { name: 'Gallery', path: '/gallery' },
                            { name: 'Media', path: '/media' },
                            { name: 'Blog', path: '/blog' },
                            { name: 'Contact Us', path: '/contact' }
                        ].map(item => (
                            <li key={item.name} className="hover:text-orange-500 cursor-pointer transition">
                                <Link to={item.path} onClick={handleScroll}> {`> ${item.name}`}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Our Products */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-4">Our Products</h4>
                    <ul className="space-y-2">
                        {[
                            { name: 'Epoxy Primers', id: '14' }, // Yahan wo ID likhein jo database mein 'Epoxy Primers' ki hai
                            { name: 'Epoxy Screed', id: '17' },  // Example ID
                            { name: 'Epoxy Coatings', id: '18' }, // Example ID
                            { name: 'Self Levelling Flooring', id: '19' }  // Example ID
                        ].map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={`/product/${item.id}`} // Yeh path aapke browser ke URL se match hona chahiye
                                    className="hover:text-orange-500 cursor-pointer transition block"
                                >
                                    {`> ${item.name}`}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
                    <p className="text-sm leading-relaxed">
                        RBM Chemicals and Solutions LLP<br />
                        Plot No. G1-123A, RIICO Industrial Area Khushkhera,
                        Bhiwadi, Rajasthan - 301707
                    </p>
                    <div className="mt-4 space-y-1 text-sm">
                        <p>✉️ rbmchemicalsandsolutionsllp@gmail.in</p>

                        <p>📞 +91 95400 04354</p>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="relative z-10 border-t border-gray-700 mt-10 pt-6 text-center text-sm">
                <p>Copyright © 2026 All Rights Reserved By RBM Chemicals.</p>
            </div>
        </footer>
    );
};

export default Footer;