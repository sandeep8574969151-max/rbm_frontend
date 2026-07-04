import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuData, setMenuData] = useState({});

    useEffect(() => {
        // Yahan URL add karna zaruri hai
        fetch(`${API_BASE_URL}/get_categories.php`)
            .then(res => res.json())
            .then(data => setMenuData(data))
            .catch(err => console.error("Error fetching menu:", err));
    }, []);

    return (
        <nav className="sticky top-0 z-50 w-full shadow-lg bg-[#002b5b]">
            <div className="hidden md:flex bg-white border-b border-gray-200 py-2 px-6 justify-end items-center text-sm text-gray-700">
                <span className="mr-8">📞 +91 95400 04354</span>
                <p>✉️ rbmchemicalsandsolutionsllp@gmail.in</p>
                <a href="/assets/rbm-catalogue.pdf" className="bg-blue-900 text-white px-4 py-1 rounded ml-4">Catalogue</a>
            </div>

            <div className="px-6 py-4 flex items-center justify-between text-white relative">
                <img src="/rbm-logo.png" alt="Logo" className="w-24" />

                <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>☰</button>

                <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-[#002b5b] p-6 md:p-0 space-y-4 md:space-y-0 md:space-x-6 text-sm font-bold items-center`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>

                    {/* Products Dropdown */}
                    <div className="relative group h-full py-2">
                        <Link to="/products" className="flex items-center cursor-pointer font-bold hover:text-orange-500">
                            PRODUCTS ▼
                        </Link>

                        <div className="absolute top-full left-0 hidden group-hover:block bg-white text-blue-900 w-64 shadow-2xl z-[1000] border-t-2 border-blue-900">
                            {menuData && Object.keys(menuData).length > 0 ? (
                                Object.entries(menuData).map(([cat, subs]) => (
                                    <div key={cat} className="border-b border-gray-100 hover:bg-gray-100 relative group/sub cursor-pointer">
                                        <Link
                                            to={`/category/${encodeURIComponent(cat)}`}
                                            className="flex justify-between items-center w-full p-3 font-bold"
                                        >
                                            {cat}
                                            {subs && subs.length > 0 && <span className="text-xs">▶</span>}
                                        </Link>

                                        {subs && subs.length > 0 && (
                                            <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white border w-64 shadow-2xl z-[1001]">
                                                {subs.map((sub, index) => (
                                                    <Link
                                                        key={`${cat}-${index}`}
                                                        to={`/products/${encodeURIComponent(sub)}`}
                                                        className="block p-3 hover:bg-blue-900 hover:text-white border-b border-gray-50 transition-all duration-200"
                                                    >
                                                        {sub}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className="p-3 text-gray-400">No categories found</div>
                            )}
                        </div>
                    </div>

                    <Link to="/gallery" onClick={() => setIsOpen(false)}>GALLERY</Link>
                    <Link to="/media" onClick={() => setIsOpen(false)}>MEDIA</Link>
                    <Link to="/blog" onClick={() => setIsOpen(false)}>BLOG</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
                    <Link to="/enquiry" className="bg-orange-500 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>ENQUIRY</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;