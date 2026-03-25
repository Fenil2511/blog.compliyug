'use client';

import React from 'react';
import Link from 'next/link';
import { Article } from '@/data/blogData';
import FormattedDate from '@/components/FormattedDate';
import { Clock, Calendar, ChevronRight, Share2, Printer, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import BreachBlitzWidget from '@/components/BreachBlitzWidget';
import ChecklistDownloadCTA from '@/components/ChecklistDownloadCTA';

interface Props {
    article: Article;
    relatedArticles: Article[];
}

const SECTOR_COLORS: Record<string, string> = {
    Healthcare: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    BFSI: 'text-violet-700 bg-violet-50 border-violet-200',
    'Ed-Tech': 'text-amber-700 bg-amber-50 border-amber-200',
    'E-commerce': 'text-rose-700 bg-rose-50 border-rose-200',
    None: 'hidden',
};

const ArticlePageClient = ({ article, relatedArticles }: Props) => {
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({ title: article.title, url: window.location.href });
        } else {
            navigator.clipboard.writeText(window.location.href);
        }
    };

    return (
        <article className="bg-white min-h-screen">
            {/* Hero Image – Full Width */}
            <div className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-compli-blue-900/80 via-compli-blue-900/30 to-transparent" />
                {/* Breadcrumb on image */}
                <div className="absolute bottom-8 left-0 right-0">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/70">
                            <Link href="/" className="hover:text-white transition-colors">Intelligence Hub</Link>
                            <ChevronRight size={12} />
                            <span className="text-compli-blue-100">{article.category}</span>
                            {article.sector !== 'None' && (
                                <>
                                    <ChevronRight size={12} />
                                    <span className="text-compli-blue-100">{article.sector}</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Header */}
            <header className="bg-white border-b border-compli-gray-100">
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl">
                        {/* Category + Sector badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-compli-blue-50 text-compli-blue-600 text-[10px] font-bold uppercase tracking-widest border border-compli-blue-100 rounded">
                                {article.category}
                            </span>
                            {article.sector !== 'None' && (
                                <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest border rounded ${SECTOR_COLORS[article.sector]}`}>
                                    {article.sector}
                                </span>
                            )}
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-compli-blue-900 leading-tight mb-6 tracking-tight"
                        >
                            {article.title}
                        </motion.h1>

                        <p className="text-xl text-compli-gray-600 leading-relaxed mb-8 max-w-3xl">
                            {article.excerpt}
                        </p>

                        {/* Author + Meta */}
                        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-compli-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-compli-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    C
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-compli-blue-900">{article.author}</p>
                                    <p className="text-[10px] text-compli-gray-600 uppercase font-bold tracking-widest">Compliance Specialist</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-bold text-compli-gray-600">
                                <Calendar size={13} />
                                <FormattedDate date={article.date} />
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-bold text-compli-gray-600">
                                <Clock size={13} />
                                <span>{article.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Article Body */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-8">

                        {/* Executive Summary */}
                        <div className="bg-compli-blue-50 border border-compli-blue-100 rounded-xl p-8 mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck size={18} className="text-compli-blue-600" />
                                <h2 className="text-xs font-bold uppercase tracking-widest text-compli-blue-600">Executive Summary</h2>
                            </div>
                            <p className="text-compli-blue-900 text-base leading-relaxed font-medium">
                                {article.summary}
                            </p>
                        </div>

                        {/* Intro quote */}
                        <p className="text-xl text-compli-gray-600 leading-relaxed font-medium italic border-l-4 border-compli-blue-600 pl-8 mb-12 py-2">
                            &quot;{article.content.intro}&quot;
                        </p>

                        {/* Key Takeaways */}
                        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                            <div className="bg-white border border-compli-gray-100 rounded-xl p-8 mb-12 shadow-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <CheckCircle2 size={18} className="text-compli-blue-600" />
                                    <h2 className="text-xs font-bold uppercase tracking-widest text-compli-blue-900">Key Takeaways</h2>
                                </div>
                                <ul className="space-y-4">
                                    {article.keyTakeaways.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-compli-blue-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                                                {idx + 1}
                                            </span>
                                            <p className="text-sm text-compli-gray-600 leading-relaxed pt-0.5">{point}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* CTA: Download Checklist (shown only when article has downloadCTA) */}
                        {article.downloadCTA && (
                            <ChecklistDownloadCTA
                                webhookUrl={article.downloadCTA.webhookUrl}
                                label={article.downloadCTA.label}
                                documentTitle={article.downloadCTA.documentTitle}
                            />
                        )}

                        {/* Article Sections */}
                        <div className="space-y-14">
                            {article.content.sections.map((section, idx) => (
                                <div key={idx}>
                                    <div className="flex items-center gap-4 mb-5">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-compli-blue-600 font-mono border border-compli-blue-100 bg-compli-blue-50 px-2 py-1 rounded">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-bold text-compli-blue-900 tracking-tight">
                                            {section.title}
                                        </h2>
                                    </div>
                                    <p className="text-compli-gray-600 leading-[1.9] text-base">
                                        {section.body}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Conclusion */}
                        <div className="bg-compli-blue-900 text-white rounded-xl p-10 mt-14 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-compli-blue-600 opacity-20 blur-3xl rounded-full -mr-10 -mt-10" />
                            <div className="relative z-10">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-compli-blue-100 mb-4">Final Assessment</h3>
                                <p className="text-white leading-relaxed text-lg font-medium italic">
                                    &ldquo;{article.content.conclusion}&rdquo;
                                </p>
                            </div>
                        </div>

                        {/* Bottom CTA Banner */}
                        <div className="mt-14 border border-compli-blue-100 rounded-xl p-8 bg-compli-blue-50 flex flex-col md:flex-row items-center gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <Zap size={16} className="text-compli-blue-600" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-compli-blue-600">DPDP Automation</span>
                                </div>
                                <h3 className="text-xl font-bold text-compli-blue-900 mb-2">Explore DPDP Automation by CompliYUG</h3>
                                <p className="text-sm text-compli-gray-600 leading-relaxed">
                                    BreachBlitz automates Rule 7(2)(b) reporting. Reduce your 72-hour response to under 4 hours.
                                </p>
                            </div>
                            <a
                                href="https://www.compliyug.com/tools"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 px-8 py-4 bg-compli-blue-900 text-white font-bold text-sm rounded hover:bg-black transition-all flex items-center gap-2 group"
                            >
                                Try Free Demo
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Related Articles */}
                        {relatedArticles.length > 0 && (
                            <div className="mt-20">
                                <div className="flex items-center gap-4 mb-8">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-compli-blue-900">Related Intelligence</h3>
                                    <div className="h-px flex-grow bg-compli-gray-100" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {relatedArticles.map(rel => (
                                        <Link
                                            key={rel.id}
                                            href={`/article/${rel.slug}`}
                                            className="group flex flex-col bg-white border border-compli-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:border-compli-blue-100 transition-all"
                                        >
                                            <div className="aspect-[16/9] overflow-hidden">
                                                <img
                                                    src={rel.image}
                                                    alt={rel.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="p-5">
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-compli-blue-600">{rel.category}</span>
                                                <h4 className="text-sm font-bold text-compli-blue-900 mt-2 leading-snug group-hover:text-compli-blue-600 transition-colors">
                                                    {rel.title}
                                                </h4>
                                                <div className="flex items-center gap-1 mt-3 text-[10px] font-bold text-compli-gray-600 uppercase tracking-widest">
                                                    <Clock size={10} />
                                                    <span>{rel.readTime}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sticky Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-28 space-y-8">
                            {/* BreachBlitz Widget */}
                            <BreachBlitzWidget />

                            {/* Share */}
                            <div className="p-6 border border-compli-gray-100 rounded-xl bg-compli-gray-50">
                                <h4 className="font-bold text-xs uppercase tracking-widest text-compli-blue-900 mb-5 border-b border-compli-gray-100 pb-4">
                                    Share Intelligence
                                </h4>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleShare}
                                        className="flex-1 flex items-center justify-center gap-2 py-3 border border-compli-gray-100 bg-white hover:bg-compli-blue-50 hover:border-compli-blue-100 transition-colors rounded font-bold text-[10px] uppercase tracking-widest"
                                    >
                                        <Share2 size={14} /> Share Link
                                    </button>
                                    <button
                                        onClick={() => window.print()}
                                        className="p-3 border border-compli-gray-100 bg-white hover:bg-compli-blue-50 hover:border-compli-blue-100 transition-colors rounded"
                                    >
                                        <Printer size={14} />
                                    </button>
                                </div>
                            </div>

                            {/* Newsletter Sidebar */}
                            <div className="p-6 border-l-4 border-compli-blue-600 bg-compli-blue-900 text-white rounded-r-xl">
                                <h4 className="font-bold text-sm mb-2 tracking-tight">Governance Weekly</h4>
                                <p className="text-xs text-compli-blue-100 mb-5 leading-relaxed">Stay ahead of DPB regulations. Directly to your inbox — no spam, only intelligence.</p>
                                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="email"
                                        placeholder="Your work email"
                                        className="bg-white/10 border border-white/20 text-white text-xs px-4 py-3 rounded outline-none focus:border-compli-blue-100 transition-colors placeholder:text-compli-blue-200"
                                        required
                                    />
                                    <button className="bg-compli-blue-600 text-white font-bold text-[10px] uppercase tracking-widest py-3 hover:bg-compli-blue-700 transition-colors rounded">
                                        Subscribe Free
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

export default ArticlePageClient;
