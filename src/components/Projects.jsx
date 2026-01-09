import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const FeaturedProject = ({ project }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative grid md:grid-cols-12 gap-8 mb-24 items-center"
    >
        {/* Project Content - Left/Top on mobile, Right on desktop for alternating effect if needed, but keeping simple for now */}
        <div className="md:col-span-7 md:col-start-1 relative z-10 md:pr-8">
            <div className="bg-slate-800/90 backdrop-blur-sm p-8 rounded-xl border border-slate-700 shadow-2xl">
                <p className="text-emerald-400 font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-100 mb-4">{project.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                </p>

                <div className="mb-6">
                    <h4 className="text-sm font-bold text-slate-200 mb-2 uppercase tracking-wider">Key Features</h4>
                    <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                            <li key={i} className="text-sm text-slate-400 flex items-center">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech) => (
                        <span key={tech} className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex space-x-6">
                    <a href={project.links.github} className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-2">
                        <FaGithub size={20} /> <span className="text-sm">Source Code</span>
                    </a>
                    <a href={project.links.demo} className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-2">
                        <FaExternalLinkAlt size={18} /> <span className="text-sm">Live Demo</span>
                    </a>
                </div>
            </div>
        </div>

        {/* Project Visual/Background - Simplified as a gradient block since we don't have screenshots yet */}
        <div className="md:col-span-6 md:col-start-7 h-full absolute top-0 right-0 w-full md:h-full -z-0 opacity-20 md:opacity-100">
            <div className="w-full h-full bg-gradient-to-br from-emerald-900/50 to-slate-900 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden">
                {/* Abstract representation of the app */}
                <div className="w-3/4 h-3/4 bg-slate-950 rounded shadow-2xl p-4 border border-slate-800 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="w-full h-4 bg-slate-800 rounded mb-4"></div>
                    <div className="flex gap-4">
                        <div className="w-1/3 h-32 bg-slate-800/50 rounded"></div>
                        <div className="w-2/3 h-32 bg-slate-800/50 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 hover:-translate-y-2 transition-all duration-300 group"
    >
        <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-900 rounded-lg text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    {project.icon}
                </div>
                <div className="flex space-x-4">
                    <a href={project.links.github} className="text-slate-400 hover:text-emerald-400 transition-colors"><FaGithub size={20} /></a>
                    <a href={project.links.demo} className="text-slate-400 hover:text-emerald-400 transition-colors"><FaExternalLinkAlt size={18} /></a>
                </div>
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">
                        {tech}
                    </span>
                ))}
                {project.tech.length > 3 && (
                    <span className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">
                        +{project.tech.length - 3}
                    </span>
                )}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const featuredProject = projects.find(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                        <span className="text-emerald-400">04.</span> Featured Projects
                    </h2>

                    {featuredProject && <FeaturedProject project={featuredProject} />}

                    <h3 className="text-2xl font-bold mb-8 text-slate-200">Other Noteworthy Projects</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
