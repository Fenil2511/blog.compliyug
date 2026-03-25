'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ARTICLES, Article, CATEGORIES, SECTORS, Category, Sector } from '@/data/blogData';
import FormattedDate from '@/components/FormattedDate';
import { Clock, ArrowRight, Star, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTOR_COLORS: Record<Sector, string> = {
    Healthcare: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    BFSI: 'text-violet-700 bg-violet-50 border-violet-200',
    'Ed-Tech': 'text-amber-700 bg-amber-50 border-amber-200',
    'E-commerce': 'text-rose-700 bg-rose-50 border-rose-200',
    None: 'hidden',
};

const BlogGrid = () => {
    const [activeCategory, setActiveCategory] = useState<'All' | Category>('All');
    const [activeSector, setActiveSector] = useState<'All' | Sector>('All');

    const getCategoryCount = (cat: 'All' | Category) => {
        if (cat === 'All') return ARTICLES.length;
        return ARTICLES.filter(a => a.category === cat).length;
    };

    const getSectorCount = (sec: 'All' | Sector) => {
        if (sec === 'All') return ARTICLES.filter(a => a.sector !== 'None').length;
        return ARTICLES.filter(a => a.sector === sec).length;
    };

    const filteredArticles = useMemo(() => {
        return ARTICLES.filter(article => {
            const categoryMatch = activeCategory === 'All' || article.category === activeCategory;
            const sectorMatch = activeSector === 'All' || article.sector === activeSector;
            return categoryMatch && sectorMatch;
        });
    }, [activeCategory, activeSector]);

    const handleCategoryClick = (cat: 'All' | Category) => {
        setActiveCategory(cat);
        setActiveSector('All'); // reset sector when changing category
    };

    return (
        <section className="py-20 bg-compli-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                    <div className="max-w-xl">
                        <span className="section-label mb-3 inline-block">Intelligence Dispatch</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-compli-blue-900 tracking-tight leading-none">
                            All <span className="text-compli-blue-600">Articles</span>
                        </h2>
                        <p className="text-compli-gray-600 mt-4 text-base">
                            {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                        </p>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-compli-gray-600 mr-2">
                        <Filter size={12} />
                        <span>Category</span>
                    </div>
                    {(['All', ...CATEGORIES] as const).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryClick(cat)}
                            className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest border rounded transition-all ${
                                activeCategory === cat
                                    ? 'bg-compli-blue-900 text-white border-compli-blue-900 shadow-sm'
                                    : 'bg-white text-compli-gray-600 border-compli-gray-100 hover:border-compli-blue-600 hover:text-compli-blue-600'
                            }`}
                        >
                            {cat}
                            <span className={`ml-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                                activeCategory === cat ? 'bg-white/20 text-white' : 'bg-compli-gray-100 text-compli-gray-600'
                            }`}>
                                {getCategoryCount(cat)}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Sector Filter */}
                <div className="flex flex-wrap items-center gap-3 mb-12 pb-8 border-b border-compli-gray-100">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-compli-gray-600 mr-2">
                        <span>Sector</span>
                    </div>
                    <button
                        onClick={() => setActiveSector('All')}
                        className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest border rounded transition-all ${
                            activeSector === 'All'
                                ? 'bg-compli-blue-600 text-white border-compli-blue-600'
                                : 'bg-white text-compli-gray-600 border-compli-gray-100 hover:border-compli-blue-100'
                        }`}
                    >
                        All Sectors
                        <span className={`ml-1.5 text-[9px] font-bold px-1 py-0.5 rounded-full ${
                            activeSector === 'All' ? 'bg-white/20 text-white' : 'bg-compli-gray-100 text-compli-gray-600'
                        }`}>
                            {ARTICLES.length}
                        </span>
                    </button>
                    {SECTORS.map((sec) => (
                        <button
                            key={sec}
                            onClick={() => setActiveSector(sec)}
                            className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest border rounded transition-all ${
                                activeSector === sec
                                    ? 'bg-compli-blue-600 text-white border-compli-blue-600'
                                    : 'bg-white text-compli-gray-600 border-compli-gray-100 hover:border-compli-blue-100'
                            }`}
                        >
                            {sec}
                            <span className={`ml-1.5 text-[9px] font-bold px-1 py-0.5 rounded-full ${
                                activeSector === sec ? 'bg-white/20 text-white' : 'bg-compli-gray-100 text-compli-gray-600'
                            }`}>
                                {getSectorCount(sec)}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Articles Grid */}
                <AnimatePresence mode="wait">
                    {filteredArticles.length === 0 ? (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="py-24 text-center"
                        >
                            <p className="text-compli-gray-600 text-lg font-medium mb-2">No articles found</p>
                            <p className="text-sm text-compli-gray-600 opacity-60">Try selecting a different category or sector.</p>
                            <button
                                onClick={() => { setActiveCategory('All'); setActiveSector('All'); }}
                                className="mt-6 px-6 py-3 bg-compli-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-compli-blue-700 transition-colors"
                            >
                                Reset Filters
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredArticles.map((article: Article, idx: number) => (
                                <motion.div
                                    key={article.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.07 }}
                                    className={`group flex flex-col bg-white border overflow-hidden hover:shadow-xl hover:border-compli-blue-100 transition-all rounded-xl ${
                                        article.featured ? 'border-compli-blue-200 ring-1 ring-compli-blue-100' : 'border-compli-gray-100'
                                    }`}
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-compli-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Featured badge */}
                                        {article.featured && (
                                            <div className="absolute top-3 right-3">
                                                <span className="flex items-center gap-1 px-2.5 py-1 bg-compli-blue-600 text-white text-[9px] font-bold uppercase tracking-widest shadow-lg rounded">
                                                    <Star size={9} fill="currentColor" />
                                                    Featured
                                                </span>
                                            </div>
                                        )}

                                        {/* Category badge */}
                                        <div className="absolute top-3 left-3">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[9px] font-bold uppercase tracking-widest text-compli-blue-900 shadow-sm border border-compli-gray-100 rounded">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-7 flex flex-col flex-grow">
                                        {/* Meta row */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-compli-gray-600">
                                                <FormattedDate date={article.date} />
                                                <div className="w-1 h-1 bg-compli-gray-600 rounded-full" />
                                                <div className="flex items-center gap-1">
                                                    <Clock size={11} />
                                                    <span>{article.readTime}</span>
                                                </div>
                                            </div>
                                            {/* Sector badge */}
                                            {article.sector !== 'None' && (
                                                <span className={`px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest border rounded ${SECTOR_COLORS[article.sector]}`}>
                                                    {article.sector}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-lg font-bold text-compli-blue-900 mb-3 group-hover:text-compli-blue-600 transition-colors leading-snug">
                                            <Link href={`/article/${article.slug}`}>{article.title}</Link>
                                        </h3>

                                        <p className="text-sm text-compli-gray-600 leading-relaxed mb-6 flex-grow">
                                            {article.excerpt}
                                        </p>

                                        <Link
                                            href={`/article/${article.slug}`}
                                            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-compli-blue-600 group/link border-t border-compli-gray-100 pt-5 mt-auto"
                                        >
                                            Read Intelligence
                                            <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default BlogGrid;
