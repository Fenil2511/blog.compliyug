'use client';

import React from 'react';
import Link from 'next/link';
import { ARTICLES, Article } from '@/data/blogData';
import FormattedDate from '@/components/FormattedDate';
import { Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogGrid = () => {
    return (
        <section className="py-24 bg-compli-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="section-label mb-3 inline-block">Intelligence Dispatch</span>
                        <h2 className="text-5xl font-bold text-compli-blue-900 tracking-tight leading-none">Intelligence <span className="text-compli-blue-600">Hub</span></h2>
                        <p className="text-compli-gray-600 mt-6 text-lg">Strategic governance, DPDP compliance, and sectoral mapping for the Digital YUG.</p>
                    </div>
                    <div className="flex gap-4">
                        {['All', 'DPDP Core', 'Sectors', 'Tools'].map((cat) => (
                            <button key={cat} className="px-4 py-2 text-xs font-bold uppercase tracking-widest border border-compli-gray-100 bg-white hover:border-compli-blue-600 transition-all rounded">
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ARTICLES.map((article: Article, idx: number) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex flex-col bg-white border border-compli-gray-100 overflow-hidden hover:shadow-xl hover:border-compli-blue-100 transition-all rounded-lg"
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-compli-blue-900 shadow-sm border border-compli-gray-100 rounded">
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-compli-gray-600 mb-4">
                                    <FormattedDate date={article.date} />
                                    <div className="w-1 h-1 bg-compli-gray-600 rounded-full" />
                                    <div className="flex items-center gap-1">
                                        <Clock size={12} />
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-compli-blue-900 mb-4 group-hover:text-compli-blue-600 transition-colors leading-tight">
                                    <Link href={`/article/${article.slug}`}>{article.title}</Link>
                                </h3>

                                <p className="text-sm text-compli-gray-600 leading-relaxed mb-8 flex-grow">
                                    {article.excerpt}
                                </p>

                                <Link
                                    href={`/article/${article.slug}`}
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-compli-blue-600 group/link"
                                >
                                    Read Intelligence <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogGrid;
