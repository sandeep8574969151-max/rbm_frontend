import React, { useState, useEffect } from 'react';
// Components import
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import About from '../components/About';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import WelcomeSection from '../components/WelcomeSection';
import ClientSlider from '../components/ClientSlider';
import CertificateSection from '../components/CertificateSection';

// Central config se URL import karein
import { API_BASE_URL } from '../config';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [banners, setBanners] = useState([]);

    // Naya Render URL yahan se lein
    const baseUrl = "https://rbm-backend-1.onrender.com";

    useEffect(() => {
        // Products fetch karein (Naya URL)
        fetch(`${baseUrl}/get_products.php`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Error fetching products:", err));

        // Banner fetch karein (Naya URL)
        fetch(`${baseUrl}/get_banners.php`)
            .then(res => res.json())
            .then(data => setBanners(data))
            .catch(err => console.error("Error fetching banners:", err));
    }, []);

    return (
        <>
            <Hero />
            <Banner />
            <About />
            <Products />
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