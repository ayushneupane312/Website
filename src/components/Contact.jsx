import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-emerald-400">07.</span> Get In Touch
                    </h2>
                    <p className="text-slate-400 mb-12 max-w-xl mx-auto">
                        I'm currently looking for new opportunities as a DevOps Engineer. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-100 mb-6">Let's Build Something Great</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                I am available for freelance projects and full-time positions. If you are interested in my work or have any questions, please don't hesitate to contact me.
                            </p>

                            <div className="space-y-4">
                                <a href="mailto:ayush@example.com" className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors">
                                    <FaEnvelope className="mr-4 text-xl" />
                                    ayushneupane2022@gmail.com
                                </a>
                                <a href="https://github.com" className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors">
                                    <FaGithub className="mr-4 text-xl" />
                                    github.com/ayushneupane312
                                </a>
                                <a href="https://linkedin.com" className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors">
                                    <FaLinkedin className="mr-4 text-xl" />
                                    linkedin.com/in/neupaneayush
                                </a>
                            </div>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message! This is a demo form.'); }}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center"
                            >
                                <FaPaperPlane className="mr-2" /> Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
