import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Youtube, Instagram, ShieldCheck } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-compli-blue-900 text-white py-16 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Col */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <img
                                src="https://ik.imagekit.io/ib9n0o3ps/only%20logo.png?updatedAt=1770716238806"
                                alt="CompliYUG"
                                className="h-10 w-auto invert brightness-0"
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                            <span className="text-2xl font-bold tracking-tight">CompliYUG</span>
                        </Link>
                        <p className="text-compli-blue-100 text-sm leading-relaxed mb-8">
                            Empowering organization to navigate the Digital YUG with security, compliance, and automated intelligence.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Youtube, Instagram].map((Icon, idx) => (
                                <Link key={idx} href="https://linktr.ee/compliyug" target="_blank" className="p-2 bg-white/10 hover:bg-white/20 transition-colors rounded">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Intelligence Feed</h4>
                        <ul className="space-y-4 text-sm text-compli-blue-100">
                            <li><Link href="/" className="hover:text-white transition-colors">DPDP News</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors">Sector Guides</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors">Risk Analysis</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors">Whitepapers</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Governance Tools</h4>
                        <ul className="space-y-4 text-sm text-compli-blue-100">
                            <li><Link href="https://www.compliyug.com/tools" target="_blank" className="hover:text-white transition-colors">BreachBlitz Demo</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors">Consent Manager</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors">DSAR Portal</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors">Audit Engine</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div>
                        <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Stay Compliant</h4>
                        <p className="text-xs text-compli-blue-100 mb-4">Subscribe for the latest DPDP Rules 2025 updates and sector guides.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white/10 border border-white/20 text-white text-sm px-4 py-2.5 focus:outline-none focus:border-compli-blue-600 rounded transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-compli-blue-600 text-white font-bold text-xs uppercase tracking-widest py-3 hover:bg-compli-blue-700 transition-colors rounded"
                            >
                                Join Dispatch
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-compli-blue-100 font-bold">
                        © 2026 CompliYUG Operations. Strategic Intelligence Secured.
                    </p>
                    <div className="flex items-center gap-6 text-[10px] uppercase font-bold tracking-widest text-compli-blue-100">
                        <Link href="/" className="hover:text-white transition-colors">Terms of Governance</Link>
                        <Link href="/" className="hover:text-white transition-colors">Privacy Shield</Link>
                        <div className="flex items-center gap-2 text-compli-blue-600">
                            <ShieldCheck size={14} />
                            <span>DPDP Compliant</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
