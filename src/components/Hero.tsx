'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative bg-white pt-20 pb-24 overflow-hidden border-b border-compli-gray-100">
            {/* Background patterns */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e0effe_1px,transparent_1px)] [background-size:32px_32px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-compli-blue-50 border border-compli-blue-100 rounded-full mb-8"
                    >
                        <ShieldAlert size={14} className="text-compli-blue-600" />
                        <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-compli-blue-600">DPDP Rules 2025 Intelligence</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-compli-blue-900 tracking-tight leading-[1.05] mb-8"
                    >
                        Governance for the <span className="text-compli-blue-600 italic">Digital YUG.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-compli-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto"
                    >
                        Strategic insights on DPDP Act 2023 compliance, automated data breach reporting, and sectoral governance frameworks. Real-time protection for modern Data Fiduciaries.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="https://www.compliyug.com/tools"
                            target="_blank"
                            className="w-full sm:w-auto px-8 py-4 bg-compli-blue-900 text-white font-bold rounded shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2 group"
                        >
                            Try BreachBlitz Free <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white border border-compli-gray-100 text-compli-blue-900 font-bold rounded hover:bg-compli-gray-50 transition-all flex items-center justify-center gap-2">
                            <Play size={16} fill="currentColor" /> Watch Rule 7(2)(b) Demo
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Visual Indicator */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
                <div className="w-12 h-12 bg-white border border-compli-gray-100 rounded-full flex items-center justify-center text-compli-blue-600 shadow-sm">
                    <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <ArrowRight size={20} className="rotate-90" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
