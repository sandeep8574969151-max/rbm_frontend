import React from 'react';

const CertificateSection = () => {
    // Apne certificates ki list
    const certificates = [
        { id: 1, image: '/assets/iso-cert.jpg', title: 'ISO 9001:2015' },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-10">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-900 uppercase">Our Certificates</h2>
                    <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
                </div>

                {/* Certificates Container: Center align karne ke liye flex ya max-w-sm ka use */}
                <div className="flex justify-center">
                    <div className="w-full max-w-lg">
                        {certificates.map((cert) => (
                            <div key={cert.id} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-auto object-contain rounded-md"
                                />
                                <p className="text-center mt-6 font-bold text-blue-900">{cert.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificateSection;