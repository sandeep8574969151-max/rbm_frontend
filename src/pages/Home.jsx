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

    useEffect(() => {
        // Products fetch karein
        fetch("https://rbmbackend-production.up.railway.app/get_products.php")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Error fetching products:", err));

        // Banner fetch karein
        fetch("https://rbmbackend-production.up.railway.app/get_banners.php")
            .then(res => res.json())
            .then(data => setBanners(data))
            .catch(err => console.error("Error fetching banners:", err));
    }, []);

    return (
        <>
            {/* Aap chahein toh condition rakh sakte hain, 
                lekin fetch URL hamesha API_BASE_URL se aayega */}
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