import React from 'react';

const LogoSection = () => {
    return (
        <div className="bg-white p-8 flex flex-col items-center justify-center">
            {/* Logo Design */}
            <div className="flex flex-row items-center gap-6">
                {/* Left Text */}
                <div className="flex flex-col items-end text-right">
                    <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight">
                        RBM CHEMICALS AND<br />SOLUTIONS LLP
                    </h1>
                    <div className="w-full h-0.5 bg-black mt-1"></div>
                    <p className="text-sm font-bold text-gray-700 mt-1 uppercase tracking-widest">
                        CHEMISTRY FOR A BETTER TOMORROW
                    </p>
                </div>

                {/* Right Icon/Graphic */}
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full">
                    {/* Yahan aap apna graphic icon laga sakte hain */}
                </div>
            </div>

            {/* Contact Details Below Logo */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-t pt-6 w-full max-w-lg">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">📱</span>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-bold">Mobile No.</p>
                        <p className="text-lg font-bold text-gray-800">9253412469</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-bold">Email ID</p>
                        <p className="text-lg font-bold text-gray-800 break-all">rbmchemicalsandsolutionsllp@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoSection;