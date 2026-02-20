import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const projects = [
    {
        title: "Tha",
        category: "Premium Property Marketplace",
        description: "Luxury real estate platform with 'Bakenovation' progressive login, anonymous calling, and gold/black aesthetic.",
        tech: ["MERN Stack", "WebRTC", "Socket.io"],
        color: "from-yellow-600 to-yellow-400",
        icon: <span className="text-3xl">🏛️</span>,
        demoLink: "http://tha.linkpc.net"
    },
    {
        title: "Lootre",
        category: "Premium E-Commerce",
        description: "High-end dropshipping store featuring a dark-themed UI, gold accents, and Amazon product integration.",
        tech: ["Vanilla JS", "CSS3", "Python Scraper"],
        color: "from-slate-900 to-yellow-600",
        icon: <span className="text-3xl">🛍️</span>,
        demoLink: "#"
    },
    {
        title: "WhatsApp Automation Bot",
        category: "Business Tool",
        description: "Automated inquiry handling system reducing response time by 90%. Features auto-replies and catalog sharing.",
        tech: ["Node.js", "WhatsApp API", "MongoDB"],
        color: "from-green-500 to-emerald-700",
        icon: <span className="text-3xl">🤖</span>,
        demoLink: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-900 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A selection of my recent work in web development and automation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-500 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="bg-white/20 backdrop-blur-md p-6 rounded-full shadow-lg"
                                >
                                    {project.icon}
                                </motion.div>
                            </div>

                            <div className="p-8">
                                <div className="text-sm font-medium text-blue-400 mb-2 uppercase tracking-wider">
                                    {project.category}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full border border-slate-600">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <button onClick={() => alert("Source code is private. Contact for access.")} className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                                        <Github size={18} /> Code
                                    </button>
                                    <a
                                        href={project.demoLink}
                                        target={project.demoLink !== "#" ? "_blank" : "_self"}
                                        onClick={(e) => {
                                            if (project.demoLink === "#") {
                                                e.preventDefault();
                                                alert("Live demo coming soon!");
                                            }
                                        }}
                                        className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <ExternalLink size={18} /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
