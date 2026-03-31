'use client';

import React, { useState } from 'react';
import { Download, Loader2, CheckCircle, AlertCircle, FileText } from 'lucide-react';

interface ChecklistDownloadCTAProps {
    webhookUrl: string;
    label?: string;
    documentTitle?: string;
    articleTitle?: string;
    articleLink?: string;
}

type FormState = 'idle' | 'loading' | 'success' | 'error';

const ChecklistDownloadCTA = ({
    webhookUrl,
    label = 'Download Free Checklist',
    documentTitle = 'Vendor Compliance Checklist',
    articleTitle = '',
    articleLink = '',
}: ChecklistDownloadCTAProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState<FormState>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setState('loading');
        setMessage('');

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: name.trim(),
                    email: email.trim(),
                    articleTitle: articleTitle,
                    articleLink: articleLink,
                    documentRequested: documentTitle
                }),
            });

            const data = await response.json();

            if (data.success) {
                setState('success');
                setMessage(`✅ PDF sent! Check your inbox at ${email.trim()}`);
                setName('');
                setEmail('');
            } else {
                setState('error');
                setMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch {
            setState('error');
            setMessage('Could not connect to server. Please try again shortly.');
        }
    };

    return (
        <div className="relative my-12 rounded-2xl overflow-hidden border border-compli-blue-100">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-compli-blue-900 via-compli-blue-900 to-[#0d3166]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-compli-blue-600 opacity-10 blur-3xl rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-compli-blue-100 opacity-5 blur-2xl rounded-full -ml-12 -mb-12" />

            <div className="relative z-10 p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left: Value prop */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full mb-5">
                            <FileText size={13} className="text-compli-blue-100" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-compli-blue-100">
                                Free Compliance Resource
                            </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug tracking-tight">
                            {label}
                        </h3>
                        <p className="text-sm text-compli-blue-100 leading-relaxed mb-6">
                            Get the complete <span className="text-white font-semibold">{documentTitle}</span> as a print-ready PDF — covering all 6 compliance categories and 8 mandatory documents your Bank must obtain from every vendor under the DPDP Act, 2023.
                        </p>
                        <ul className="space-y-2.5">
                            {[
                                'Section 8(1) liability checklist',
                                'Rule 8(3) log retention templates',
                                '72-hour breach SLA framework',
                                'Data erasure certificate formats',
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2.5 text-sm text-compli-blue-100">
                                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-compli-blue-600 flex items-center justify-center">
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                                            <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
                        {state === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                                    <CheckCircle size={28} className="text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg mb-1">PDF Sent!</p>
                                    <p className="text-sm text-compli-blue-100 leading-relaxed">{message}</p>
                                </div>
                                <button
                                    onClick={() => { setState('idle'); setMessage(''); }}
                                    className="mt-2 text-[10px] font-bold uppercase tracking-widest text-compli-blue-100 hover:text-white underline underline-offset-4 transition-colors"
                                >
                                    Send to another email
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-compli-blue-100 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="e.g. Rahul Sharma"
                                        required
                                        disabled={state === 'loading'}
                                        className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm px-4 py-3 rounded-lg outline-none focus:border-compli-blue-400 focus:bg-white/15 transition-all disabled:opacity-50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-compli-blue-100 mb-2">
                                        Work Email
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="e.g. ciso@yourbank.com"
                                        required
                                        disabled={state === 'loading'}
                                        className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm px-4 py-3 rounded-lg outline-none focus:border-compli-blue-400 focus:bg-white/15 transition-all disabled:opacity-50"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={state === 'loading'}
                                    className="mt-2 w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-compli-blue-600 hover:bg-compli-blue-700 disabled:opacity-60 text-white font-bold text-sm rounded-lg transition-all group"
                                >
                                    {state === 'loading' ? (
                                        <>
                                            <Loader2 size={16} className="animate-spin" />
                                            Sending PDF…
                                        </>
                                    ) : (
                                        <>
                                            <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                                            Get Free PDF
                                        </>
                                    )}
                                </button>

                                {state === 'error' && (
                                    <div className="flex items-start gap-2 p-3 bg-red-500/10 border border-red-400/20 rounded-lg">
                                        <AlertCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                                        <p className="text-xs text-red-300 leading-relaxed">{message}</p>
                                    </div>
                                )}

                                <p className="text-[10px] text-white/30 text-center leading-relaxed pt-1">
                                    🔒 No spam. DPDP-compliant data handling. Unsubscribe anytime.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChecklistDownloadCTA;
