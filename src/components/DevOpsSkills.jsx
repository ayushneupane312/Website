import React from 'react';
import { motion } from 'framer-motion';
import { devOpsSkills } from '../data/skills';

const SkillBar = ({ name, level, description }) => (
    <div className="mb-6 group">
        <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-slate-200 group-hover:text-emerald-400 transition-colors">{name}</span>
            <span className="text-sm font-medium text-slate-400">{level}%</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
            <motion.div
                className="bg-gradient-to-r from-emerald-500 to-sky-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            ></motion.div>
        </div>
        <p className="text-xs text-slate-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
        </p>
    </div>
);

const DevOpsSkills = () => {
    return (
        <section id="devops" className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        <span className="text-emerald-400">02.</span> DevOps Expertise
                    </h2>
                    <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
                        My core competency lies in automating the software delivery lifecycle and managing scalable infrastructure.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {devOpsSkills.map((category, index) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-all hover:shadow-lg hover:shadow-emerald-500/5"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-slate-800 rounded-lg mr-4 text-2xl">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-100">{category.category}</h3>
                                </div>

                                <div>
                                    {category.skills.map((skill) => (
                                        <SkillBar key={skill.name} {...skill} />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DevOpsSkills;
