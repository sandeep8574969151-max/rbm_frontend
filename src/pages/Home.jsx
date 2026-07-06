import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import WelcomeSection from '../components/WelcomeSection';
import ClientSlider from '../components/ClientSlider';
import CertificateSection from '../components/CertificateSection';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [banners, setBanners] = useState([]);
    const baseUrl = "https://rbm-backend-1.onrender.com";

    useEffect(() => {
        // Products Fetch
        fetch(`${baseUrl}/get_products.php`)
            .then(res => {
                if (!res.ok) throw new Error("Network error");
                return res.json();
            })
            .then(data => setProducts(data))
            .catch(err => console.error("Error fetching products:", err));

        // Banners Fetch
        fetch(`${baseUrl}/get_banners.php`)
            .then(res => {
                if (!res.ok) throw new Error("Network error");
                return res.json();
            })
            .then(data => setBanners(data))
            .catch(err => console.error("Error fetching banners:", err));
    }, []);

    return (
        <>
            {/* Yahan banners ko Hero mein pass karein agar Hero banner show karta hai */}
            <Hero banners={banners} />
            <About />
            {/* Yahan products pass karein */}
            <Products products={products} />
            <WhyChooseUs />
            <ClientSlider />
            <WelcomeSection />
            <StatsSection />
            <CTASection />
            <CertificateSection />
        </>
    );
};

export default Home;