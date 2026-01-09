import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-950 py-8 border-t border-slate-900">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Ayush Neupane. All rights reserved.
                    </p>
                    <p className="text-slate-600 text-xs mt-1 flex items-center justify-center md:justify-start">
                        Built with <FaHeart className="text-red-500 mx-1" /> using React, Tailwind & Vite
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors"><FaGithub size={20} /></a>
                    <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors"><FaLinkedin size={20} /></a>
                    <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors"><FaTwitter size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
