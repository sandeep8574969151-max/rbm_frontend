import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // 1. Yahan Footer import karein
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Ye main content ko push karega */}
            <main className="flex-grow">
                {children}
            </main>

            {/* 2. Yahan Footer ko call karein */}
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Layout;