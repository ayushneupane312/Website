import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaServer, FaCode } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-slate-950">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center space-x-2 mb-4">
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-mono border border-emerald-500/20">
                            DevOps Engineer
                        </span>
                        <span className="px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full text-sm font-mono border border-sky-500/20">
                            Full Stack Developer
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Automating <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-500">Infrastructure</span>, <br />
                        Delivering <span className="text-slate-100">Excellence</span>
                    </h1>

                    <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
                        I bridge the gap between development and operations with scalable architecture, automated pipelines, and a strong Computer Science foundation.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-emerald-500/25 flex items-center">
                            <FaCode className="mr-2" /> View Projects
                        </a>
                        <a href="#contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all border border-slate-700 flex items-center">
                            <FaTerminal className="mr-2" /> Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-sky-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <img
                            src="/ayush.jpeg"
                            alt="Ayush Neupane"
                            className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl z-10"
                        />

                        {/* Floating Icons */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute -top-4 -right-4 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl z-20"
                        >
                            <FaServer className="text-emerald-400 text-2xl" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                            className="absolute -bottom-4 -left-4 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl z-20"
                        >
                            <FaTerminal className="text-sky-400 text-2xl" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
