import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', href: '#' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 left-0 px-6 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center bg-slate-900/80 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50">
                    {/* Logo */}
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        PORTFOLIO
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Hire Me Button */}
                    <div className="hidden md:block">
                        <a href="#contact" className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition-colors">
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-300 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-6 right-6 bg-slate-800 rounded-2xl p-4 border border-slate-700 shadow-xl md:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-300 hover:text-white transition-colors p-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="w-full py-2 bg-blue-500 text-white rounded-xl font-medium">
                                Hire Me
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
