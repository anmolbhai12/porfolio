import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
                        <p className="text-slate-400 text-lg">
                            I'm currently available for freelance projects and remote roles.
                            <br />Have a project in mind? Let's discuss.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 bg-slate-800/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-slate-700">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Email Me</h4>
                                        <p className="text-slate-400">contact@example.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Call Me</h4>
                                        <p className="text-slate-400">+1 (555) 000-0000</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Location</h4>
                                        <p className="text-slate-400">Remote / Worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-4" onSubmit={(e) => {
                            e.preventDefault();
                            alert("Thank you! Your message has been sent (Demo Mode).");
                        }}>
                            <div>
                                <label className="block text-slate-300 mb-2 text-sm font-medium">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-300 mb-2 text-sm font-medium">Your Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-300 mb-2 text-sm font-medium">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                                <Send size={20} /> Send Message
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
