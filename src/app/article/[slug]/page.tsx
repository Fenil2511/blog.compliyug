'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { ARTICLES, Article } from '@/data/blogData';
import FormattedDate from '@/components/FormattedDate';
import { Clock, Calendar, ChevronRight, Share2, Printer } from 'lucide-react';
import { motion } from 'framer-motion';
import BreachBlitzWidget from '@/components/BreachBlitzWidget';

const ArticlePage = () => {
    const params = useParams();
    const slug = params.slug as string;
    const article = ARTICLES.find((a) => a.slug === slug);

    if (!article) {
        return notFound();
    }

    return (
        <article className="bg-white min-h-screen">
            {/* Article Hero */}
            <header className="py-20 bg-compli-gray-50 border-b border-compli-gray-100 overflow-hidden relative">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(#e0effe_2px,transparent_2px)] [background-size:48px_48px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 mb-8">
                            <span className="section-label">Intelligence Dispatch</span>
                            <ChevronRight size={14} className="text-compli-gray-600" />
                            <span className="text-[10px] uppercase font-bold text-compli-gray-600 tracking-widest">{article.category}</span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl font-bold text-compli-blue-900 leading-tight mb-8 tracking-tight"
                        >
                            {article.title}
                        </motion.h1>

                        <div className="flex flex-wrap items-center gap-8 border-t border-compli-gray-200 pt-8 mt-12">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-compli-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                    {article.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-compli-blue-900">{article.author}</p>
                                    <p className="text-[10px] text-compli-gray-600 uppercase font-medium">Compliance Specialist</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 text-xs font-bold text-compli-gray-600">
                                    <Calendar size={14} />
                                    <FormattedDate date={article.date} />
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-compli-gray-600">
                                    <Clock size={14} />
                                    <span>{article.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Article Body */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="prose prose-lg max-w-none prose-blue">
                            <p className="text-xl text-compli-gray-600 leading-relaxed font-medium italic border-l-4 border-compli-blue-600 pl-8 mb-12">
                                &quot;{article.content.intro}&quot;
                            </p>

                            {article.content.sections.map((section, idx) => (
                                <div key={idx} className="mb-16">
                                    <h2 className="text-3xl font-bold text-compli-blue-900 mb-6 tracking-tight">{section.title}</h2>
                                    <p className="text-compli-gray-600 leading-[1.8] mb-8">
                                        {section.body}
                                    </p>
                                </div>
                            ))}

                            <div className="bg-compli-blue-50 border border-compli-blue-100 p-10 rounded-lg mb-16">
                                <h3 className="text-lg font-bold text-compli-blue-900 mb-4">Final Assessment</h3>
                                <p className="text-compli-gray-600 leading-relaxed italic">
                                    {article.content.conclusion}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sticky Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-28 space-y-10">
                            {/* Tool Integration */}
                            <BreachBlitzWidget />

                            {/* Share */}
                            <div className="p-8 border border-compli-gray-100 rounded-lg bg-compli-gray-50">
                                <h4 className="font-bold text-xs uppercase tracking-widest text-compli-blue-900 mb-6 underline decoration-compli-blue-600 underline-offset-8">Share Intelligence</h4>
                                <div className="flex gap-4">
                                    <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-compli-gray-100 bg-white hover:bg-compli-blue-50 transition-colors rounded font-bold text-[10px] uppercase tracking-widest">
                                        <Share2 size={16} /> LinkedIn
                                    </button>
                                    <button className="p-3 border border-compli-gray-100 bg-white hover:bg-compli-blue-50 transition-colors rounded">
                                        <Printer size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Newsletter Small */}
                            <div className="p-8 border-l-4 border-compli-blue-600 bg-compli-blue-900 text-white rounded-r-lg">
                                <h4 className="font-bold text-sm mb-4 tracking-tight">Governance Weekly</h4>
                                <p className="text-xs text-compli-blue-50 mb-6">Stay ahead of DPB regulations. Directly to your inbox.</p>
                                <form className="flex flex-col gap-3">
                                    <input
                                        type="email"
                                        placeholder="Strategy email"
                                        className="bg-white/10 border border-white/20 text-white text-xs px-4 py-3 rounded"
                                        required
                                    />
                                    <button className="bg-white text-compli-blue-900 font-bold text-[10px] uppercase tracking-widest py-3 hover:bg-compli-blue-50 transition-colors rounded">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
};

export default ArticlePage;
