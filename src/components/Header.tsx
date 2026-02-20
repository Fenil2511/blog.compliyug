'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Menu, X, ArrowRight, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ARTICLES, Article } from '@/data/blogData';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');

    const filteredArticles = React.useMemo(() => {
        if (!searchQuery.trim()) return [];
        return ARTICLES.filter(article =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 5);
    }, [searchQuery]);

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-compli-gray-100 shadow-sm">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo & Branding */}
                <Link href="/" className="flex items-center gap-3 group transition-all">
                    <img
                        src="https://ik.imagekit.io/ib9n0o3ps/only%20logo.png?updatedAt=1770716238806"
                        alt="CompliYUG Logo"
                        className="h-10 w-auto group-hover:scale-105 transition-transform"
                    />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-compli-blue-900 leading-none">CompliYUG</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-compli-blue-600 mt-1">Intelligence Hub</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/category/dpdp-core" className="text-sm font-medium text-compli-gray-600 hover:text-compli-blue-600 transition-colors">DPDP Core</Link>
                    <Link href="/category/sectors" className="text-sm font-medium text-compli-gray-600 hover:text-compli-blue-600 transition-colors">Sectors</Link>
                    <Link href="/category/tools" className="text-sm font-medium text-compli-gray-600 hover:text-compli-blue-600 transition-colors">Tools</Link>
                    <div className="h-4 w-px bg-compli-gray-100 mx-2" />
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="p-2 text-compli-gray-600 hover:text-compli-blue-600 transition-colors"
                    >
                        <Search size={20} />
                    </button>
                    <Link href="https://linktr.ee/compliyug" target="_blank" className="bg-compli-blue-600 text-white px-5 py-2.5 text-sm font-bold hover:bg-compli-blue-700 transition-all rounded shadow-sm">
                        Partner with Experts
                    </Link>
                </nav>

                {/* Mobile Icons */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="p-2 text-compli-blue-900"
                    >
                        <Search size={24} />
                    </button>
                    <button
                        className="p-2 text-compli-blue-900"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-compli-gray-100 p-4 overflow-hidden"
                    >
                        <nav className="flex flex-col gap-4">
                            <Link href="/category/dpdp-core" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2">DPDP Core</Link>
                            <Link href="/category/sectors" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2">Sectors</Link>
                            <Link href="/category/tools" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2">Tools</Link>
                            <Link href="https://linktr.ee/compliyug" target="_blank" className="bg-compli-blue-600 text-white px-5 py-3 text-center font-bold mt-4 rounded">
                                Partner with Experts
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Search Overlay */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-white pt-20"
                    >
                        <div className="container mx-auto px-4 max-w-4xl">
                            <div className="flex items-center justify-between gap-6 pb-8 border-b border-compli-gray-100">
                                <div className="flex-1 flex items-center gap-4">
                                    <Search size={32} className="text-compli-blue-600" />
                                    <input
                                        autoFocus
                                        type="text"
                                        placeholder="Search compliance intelligence..."
                                        className="w-full text-2xl md:text-4xl font-bold text-compli-blue-900 placeholder:text-compli-gray-100 outline-none"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <button
                                    onClick={() => {
                                        setIsSearchOpen(false);
                                        setSearchQuery('');
                                    }}
                                    className="p-3 bg-compli-gray-50 hover:bg-compli-gray-100 rounded-full transition-colors text-compli-blue-900"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="py-12">
                                {searchQuery.trim() === '' ? (
                                    <div className="flex flex-col gap-6">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-compli-gray-600">Quick Filters</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {['DPDP Rules', 'Healthcare', 'BFSI', 'Reporting', 'Tools'].map(item => (
                                                <button
                                                    key={item}
                                                    onClick={() => setSearchQuery(item)}
                                                    className="px-6 py-3 bg-compli-gray-50 hover:bg-compli-blue-50 hover:text-compli-blue-600 rounded font-bold text-sm transition-all"
                                                >
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-10">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-compli-gray-600">
                                                {filteredArticles.length} Result{filteredArticles.length !== 1 ? 's' : ''} Found
                                            </h4>
                                        </div>

                                        {filteredArticles.length > 0 ? (
                                            <div className="grid gap-6">
                                                {filteredArticles.map(article => (
                                                    <Link
                                                        key={article.id}
                                                        href={`/article/${article.slug}`}
                                                        onClick={() => {
                                                            setIsSearchOpen(false);
                                                            setSearchQuery('');
                                                        }}
                                                        className="group flex flex-col md:flex-row gap-6 p-6 border border-compli-gray-100 hover:border-compli-blue-100 hover:shadow-lg transition-all rounded-lg bg-white"
                                                    >
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-compli-blue-600 mb-3">
                                                                <span>{article.category}</span>
                                                                <span className="w-1 h-1 bg-compli-gray-100 rounded-full" />
                                                                <div className="flex items-center gap-1 text-compli-gray-600">
                                                                    <Clock size={12} />
                                                                    <span>{article.readTime}</span>
                                                                </div>
                                                            </div>
                                                            <h3 className="text-xl font-bold text-compli-blue-900 group-hover:text-compli-blue-600 transition-colors mb-2">
                                                                {article.title}
                                                            </h3>
                                                            <p className="text-sm text-compli-gray-600 line-clamp-2">
                                                                {article.excerpt}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center justify-center md:px-4">
                                                            <ArrowRight size={24} className="text-compli-gray-100 group-hover:text-compli-blue-600 group-hover:translate-x-2 transition-all" />
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="py-20 text-center">
                                                <p className="text-compli-gray-600 text-lg font-medium">No intelligence found for &quot;{searchQuery}&quot;</p>
                                                <p className="text-sm text-compli-gray-100 mt-2">Try searching for broader terms like &quot;DPDP&quot; or &quot;Compliance&quot;</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
