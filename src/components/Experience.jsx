import React from 'react';
import { motion } from 'framer-motion';
import { experience, education } from '../data/experience';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const TimelineItem = ({ data, icon, isLast }) => (
    <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8 group">
        {/* Line */}
        <div className="absolute left-0 top-0 h-full w-px bg-slate-800 md:left-auto md:right-0 md:col-start-2 md:col-end-3 md:mx-auto"></div>

        {/* Icon */}
        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-900 md:left-auto md:right-[-8px] md:col-start-2 md:col-end-3 md:mx-auto group-hover:scale-125 transition-transform"></div>

        {/* Content */}
        <div className="md:col-span-2 md:text-right mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-slate-100">{data.role || data.degree}</h3>
            <p className="text-emerald-400 font-mono text-sm mb-2">{data.company || data.institution}</p>
            <span className="inline-block px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-400 border border-slate-700">
                {data.period}
            </span>
        </div>

        <div className="md:col-span-2 md:col-start-4 pb-12">
            <p className="text-slate-400 mb-4">{data.description}</p>
            <ul className="space-y-2">
                {data.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-slate-500 flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-emerald-500 rounded-full flex-shrink-0"></span>
                        {achievement}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                        <span className="text-emerald-400">06.</span> Experience & Education
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        {/* Experience */}
                        <div className="mb-12">
                            <div className="flex items-center mb-8">
                                <FaBriefcase className="text-2xl text-emerald-400 mr-4" />
                                <h3 className="text-2xl font-bold text-slate-200">Professional Journey</h3>
                            </div>
                            <div className="space-y-0">
                                {experience.map((item, index) => (
                                    <TimelineItem key={item.id} data={item} isLast={index === experience.length - 1} />
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <div className="flex items-center mb-8">
                                <FaGraduationCap className="text-2xl text-emerald-400 mr-4" />
                                <h3 className="text-2xl font-bold text-slate-200">Education</h3>
                            </div>
                            <div className="space-y-0">
                                {education.map((item, index) => (
                                    <TimelineItem key={item.id} data={item} isLast={index === education.length - 1} />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
