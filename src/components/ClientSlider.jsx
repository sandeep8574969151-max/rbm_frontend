import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_BASE_URL } from './config';

const ClientSlider = () => {
    // Railway ka backend URL direct yahan use karein (Agar config file mein issue ho toh)


    const [clients, setClients] = useState([]);

    useEffect(() => {
        // Backend se client data fetch karein
        fetch(`${API_BASE_URL}get_clients.php`)
            .then(res => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then(data => {
                console.log("Clients loaded:", data);
                setClients(Array.isArray(data) ? data : (data.clients || []));
            })
            .catch(err => console.error("Error fetching clients:", err));
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } }
        ]
    };

    return (
        <section className="py-16 bg-white container mx-auto px-10">
            <h2 className="text-3xl font-bold text-[#002b5b] text-center mb-8">RBM CHEMICALS ESTEEMED CLIENTS</h2>
            <div className="border-b-2 border-gray-300 w-24 mx-auto mb-10"></div>

            {clients.length > 0 ? (
                <Slider {...settings}>
                    {clients.map((client, index) => (
                        <div key={index} className="px-2">
                            <div className="h-24 flex items-center justify-center border border-gray-200 p-2 bg-white hover:shadow-lg transition">
                                <img
                                    // Yahan path check karein: database mein column ka naam 'logoUrl' hai ya 'logo'?
                                    src={`${API_BASE_URL}uploads/${client.logoUrl}`}
                                    alt={client.name || "Client Logo"}
                                    className="max-h-full max-w-full object-contain"
                                    onError={(e) => { e.target.onerror = null; e.target.src = '/assets/placeholder-logo.png'; }}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <p className="text-center text-gray-500">Loading clients...</p>
            )}
        </section>
    );
};

export default ClientSlider;