import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 z-10 relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-6"
                    >
                        <h2 className="text-blue-400 font-medium tracking-wide">HELLO, I'M A</h2>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Full Stack <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Developer
                            </span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-lg">
                            Crafting premium digital experiences with modern web technologies.
                            Specializing in React, Node.js, and high-performance UI design.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href="#projects" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2">
                                View Projects <ArrowRight size={20} />
                            </a>
                            <a href="#contact" className="px-8 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-full font-medium transition-all hover:bg-slate-800">
                                Contact Me
                            </a>
                        </div>

                        <div className="flex gap-6 pt-8 text-slate-400">
                            <a href="#" className="hover:text-blue-400 transition-colors"><Github size={24} /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><Mail size={24} /></a>
                        </div>
                    </motion.div>

                    {/* Image/Graphic Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 flex justify-center"
                    >
                        <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
                            <div className="relative z-10 w-full h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 flex items-center justify-center p-8">
                                <div className="text-center space-y-4">
                                    <div className="w-24 h-24 bg-blue-500/20 rounded-full mx-auto flex items-center justify-center">
                                        <span className="text-4xl">👨‍💻</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-4 w-32 bg-slate-700 rounded mx-auto" />
                                        <div className="h-4 w-24 bg-slate-700 rounded mx-auto" />
                                    </div>

                                    {/* Floating Cards Effect */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                        className="absolute -top-6 -right-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl"
                                    >
                                        <span className="text-green-400 font-bold">200+</span>
                                        <span className="text-slate-400 text-sm block">Completed Projects</span>
                                    </motion.div>

                                    <motion.div
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                        className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl"
                                    >
                                        <span className="text-blue-400 font-bold">100%</span>
                                        <span className="text-slate-400 text-sm block">Client Satisfaction</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
