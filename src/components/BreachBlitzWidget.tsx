'use client';

import React from 'react';
import { Zap, ShieldCheck, FileCheck, ArrowRight } from 'lucide-react';

const BreachBlitzWidget = () => {
    return (
        <div className="bg-compli-blue-900 text-white p-8 rounded-lg shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-compli-blue-600 opacity-20 blur-3xl rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />

            <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-compli-blue-600 rounded-lg">
                        <Zap size={24} className="text-white" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg tracking-tight">BreachBlitz Engine</h4>
                        <p className="text-[10px] uppercase tracking-widest text-compli-blue-100 font-bold">Rule 7(2)(b) Reporting Tool</p>
                    </div>
                </div>

                <p className="text-sm text-compli-blue-50 leading-relaxed">
                    The DPDP Act allows only 72 hours for breach notifications. Our engine automates the triage, dossier generation, and board submission process.
                </p>

                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-xs font-medium text-compli-blue-100">
                        <ShieldCheck size={16} className="text-compli-blue-600" />
                        <span>DPDP Rule 7 Alignment</span>
                    </li>
                    <li className="flex items-center gap-3 text-xs font-medium text-compli-blue-100">
                        <FileCheck size={16} className="text-compli-blue-600" />
                        <span>Ready-to-Submit Reports</span>
                    </li>
                </ul>

                <a
                    href="https://www.compliyug.com/tools"
                    target="_blank"
                    className="w-full flex items-center justify-between px-6 py-4 bg-white text-compli-blue-900 font-bold rounded hover:bg-compli-gray-50 transition-all group/btn"
                >
                    <span>Try Free Demo</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>

                <p className="text-[9px] text-center text-compli-blue-100 opacity-60 italic">
                    *Trusted by CISOs in Healthcare & BFSI
                </p>
            </div>
        </div>
    );
};

export default BreachBlitzWidget;
