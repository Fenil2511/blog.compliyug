'use client';

import { useState, useEffect } from 'react';

interface FormattedDateProps {
    date: string;
    className?: string;
}

export default function FormattedDate({ date, className }: FormattedDateProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const formatted = new Date(date).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    if (!mounted) {
        // Return a placeholder with the same structure but no specific date text to avoid mismatch 
        // or just return the date if you are confident, but mounted check is safest.
        return <span className={className}>...</span>;
    }

    return <span className={className}>{formatted}</span>;
}
