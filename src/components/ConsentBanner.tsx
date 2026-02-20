'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ConsentBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('compliyug-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('compliyug-consent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100]"
                >
                    <div className="bg-white border border-compli-blue-100 shadow-2xl p-8 rounded-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-compli-blue-600" />

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-compli-blue-50 rounded text-compli-blue-600">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <h4 className="font-bold text-compli-blue-900 tracking-tight">Compliance Protocol</h4>
                                </div>
                                <button onClick={() => setIsVisible(false)} className="text-compli-gray-600 hover:text-compli-blue-600 transition-colors">
                                    <X size={18} />
                                </button>
                            </div>

                            <p className="text-sm text-compli-gray-600 leading-relaxed">
                                To research the Digital YUG, we use strategic identifiers to optimize your intelligence experience. Continuing acknowledges our DPDP-aligned data protocols.
                            </p>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 px-4 py-3 bg-compli-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-compli-blue-700 transition-colors rounded"
                                >
                                    Accept Terms
                                </button>
                                <button className="flex-1 px-4 py-3 bg-white border border-compli-gray-100 text-compli-blue-900 font-bold text-xs uppercase tracking-widest hover:bg-compli-gray-50 transition-colors rounded inline-flex items-center justify-center gap-2">
                                    Learn More <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ConsentBanner;
