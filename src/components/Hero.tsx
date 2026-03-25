'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldAlert, Clock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { ARTICLES } from '@/data/blogData';
import FormattedDate from '@/components/FormattedDate';

const Hero = () => {
    const featuredArticle = ARTICLES.find(a => a.featured);

    return (
        <section className="relative bg-white pt-20 pb-0 overflow-hidden border-b border-compli-gray-100">
            {/* Subtle grid background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e0effe_1px,transparent_1px)] [background-size:32px_32px]" />
            </div>
            {/* Top gradient fade */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-compli-blue-50/60 to-transparent z-0" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center pb-16">
                    {/* Live Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-compli-blue-50 border border-compli-blue-100 rounded-full mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-compli-blue-600 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-compli-blue-600"></span>
                        </span>
                        <ShieldAlert size={13} className="text-compli-blue-600" />
                        <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-compli-blue-600">DPDP Rules 2025 Intelligence — Live Updates</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-compli-blue-900 tracking-tight leading-[1.05] mb-8"
                    >
                        Governance for the{' '}
                        <span className="text-compli-blue-600 italic">Digital YUG.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-compli-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto"
                    >
                        Strategic insights on DPDP Act 2023 compliance, automated data breach reporting, and sectoral governance frameworks. Built for CISOs, compliance officers, and data fiduciaries.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <Link
                            href="https://www.compliyug.com/tools"
                            target="_blank"
                            className="w-full sm:w-auto px-8 py-4 bg-compli-blue-900 text-white font-bold rounded shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2 group"
                        >
                            <Zap size={16} className="text-compli-blue-100" />
                            Try BreachBlitz Free
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="https://linktr.ee/compliyug"
                            target="_blank"
                            className="w-full sm:w-auto px-8 py-4 bg-white border border-compli-gray-100 text-compli-blue-900 font-bold rounded hover:bg-compli-gray-50 transition-all flex items-center justify-center gap-2"
                        >
                            Partner with Experts
                        </Link>
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap justify-center items-center gap-8 mb-0 pb-16 border-b border-compli-gray-100"
                    >
                        {[
                            { value: '₹250Cr', label: 'Max DPDP Penalty' },
                            { value: '72 hrs', label: 'Breach Reporting Window' },
                            { value: '4 Sectors', label: 'Covered In-Depth' },
                            { value: 'Live', label: 'Rule Updates' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-2xl font-bold text-compli-blue-900 tracking-tight">{stat.value}</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-compli-gray-600 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Featured Article Spotlight */}
                {featuredArticle && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="-mb-px"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="section-label">Featured Intelligence</span>
                            <div className="h-px flex-grow bg-compli-gray-100" />
                        </div>
                        <Link href={`/article/${featuredArticle.slug}`} className="group block">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-compli-blue-900 rounded-t-2xl overflow-hidden p-8 md:p-12 hover:bg-black transition-colors duration-300">
                                <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="px-3 py-1 bg-compli-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded">
                                            {featuredArticle.category}
                                        </span>
                                        <div className="flex items-center gap-1.5 text-compli-blue-100 text-[10px] font-bold uppercase tracking-widest">
                                            <Clock size={11} />
                                            <span>{featuredArticle.readTime}</span>
                                        </div>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4 group-hover:text-compli-blue-100 transition-colors">
                                        {featuredArticle.title}
                                    </h2>
                                    <p className="text-compli-blue-100 text-sm leading-relaxed mb-8">
                                        {featuredArticle.summary}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-compli-blue-600 flex items-center justify-center text-white text-xs font-bold">C</div>
                                            <div>
                                                <p className="text-xs font-bold text-white">{featuredArticle.author}</p>
                                                <FormattedDate date={featuredArticle.date} className="text-[10px] text-compli-blue-100 uppercase tracking-widest font-bold" />
                                            </div>
                                        </div>
                                        <div className="ml-auto flex items-center gap-2 text-sm font-bold text-compli-blue-100 group-hover:text-white transition-colors">
                                            Read Full Brief
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative aspect-[16/10] lg:aspect-auto rounded-xl overflow-hidden">
                                    <img
                                        src={featuredArticle.image}
                                        alt={featuredArticle.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-compli-blue-900/50 to-transparent" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Hero;
