import React from 'react';
import { motion } from 'framer-motion';
import { technicalSkills } from '../data/skills';
import { FaPython, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaTools, FaTerminal, FaCode } from 'react-icons/fa';
import { SiExpress, SiUnity, SiMysql, SiMongodb, SiPostgresql, SiPostman, SiFigma } from 'react-icons/si';

const iconMap = {
    "Python": <FaPython />,
    "JavaScript": <FaJs />,
    "C": <FaCode />,
    "C#": <FaCode />,
    "Bash": <FaTerminal />,
    "React": <FaReact />,
    "Node.js": <FaNodeJs />,
    "Express.js": <SiExpress />,
    "Unity": <SiUnity />,
    "MySQL": <SiMysql />,
    "MongoDB": <SiMongodb />,
    "PostgreSQL": <SiPostgresql />,
    "Git & GitHub": <FaGitAlt />,
    "VS Code": <FaTools />, // Generic tool icon
    "Postman": <SiPostman />,
    "Figma": <SiFigma />
};

const SkillCategory = ({ title, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="mb-12"
    >
        <h3 className="text-xl font-bold mb-6 text-slate-300 border-b border-slate-800 pb-2 inline-block">{title}</h3>
        <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
                <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-slate-800 px-4 py-3 rounded-lg border border-slate-700 flex items-center space-x-3 hover:bg-slate-700 hover:border-emerald-500/50 transition-all cursor-default"
                >
                    <span className="text-2xl text-emerald-400">
                        {iconMap[skill.name] || <FaTools />}
                    </span>
                    <span className="font-medium text-slate-200">{skill.name}</span>
                    <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full ${i < skill.level ? 'bg-emerald-500' : 'bg-slate-600'}`}
                            />
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const TechnicalSkills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                        <span className="text-emerald-400">03.</span> Technical Arsenal
                    </h2>

                    <div className="max-w-5xl mx-auto">
                        <SkillCategory title="Programming Languages" skills={technicalSkills.languages} delay={0} />
                        <SkillCategory title="Frameworks & Libraries" skills={technicalSkills.frameworks} delay={0.1} />
                        <SkillCategory title="Databases" skills={technicalSkills.databases} delay={0.2} />
                        <SkillCategory title="Tools & Platforms" skills={technicalSkills.tools} delay={0.3} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechnicalSkills;
