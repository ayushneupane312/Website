import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLightbulb, FaCogs } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        <span className="text-emerald-400">01.</span> About Me
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
                            <FaCogs className="text-4xl text-emerald-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">DevOps Mindset</h3>
                            <p className="text-slate-400">
                                I believe in Infrastructure as Code and automation-driven thinking. My goal is to build systems that are resilient, scalable, and self-healing.
                            </p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
                            <FaLightbulb className="text-4xl text-sky-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Problem Solver</h3>
                            <p className="text-slate-400">
                                I approach challenges with an engineering mindset, breaking down complex problems into manageable, efficient solutions.
                            </p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
                            <FaGraduationCap className="text-4xl text-purple-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">CS Foundations</h3>
                            <p className="text-slate-400">
                                Strong theoretical background in algorithms, data structures, and system design, enabling me to write optimized and maintainable code.
                            </p>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
                        <p className="mb-4">
                            Hello! I'm Ayush, a DevOps Engineer and Full Stack Developer with a passion for building robust infrastructure and scalable web applications. My journey started with a curiosity about how software is delivered to users, which led me to dive deep into the world of CI/CD, containerization, and cloud computing.
                        </p>
                        <p className="mb-4">
                            I recently completed my Bachelor of Computer Science (Hons), where I honed my skills in software engineering principles and system architecture. My flagship project, a comprehensive Futsal Management System, demonstrates my ability to handle full-stack development while applying rigorous engineering standards.
                        </p>
                        <p>
                            I am constantly learning and exploring new technologies. Currently, I'm focused on mastering Kubernetes and advanced cloud-native patterns to further enhance my ability to deliver production-grade infrastructure.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
